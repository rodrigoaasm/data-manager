import { logger } from '@dojot/dojot-module-logger';
import requestFlow from './requestsFlow';
import requestNode from './requestsNode';
import Requests from '../utils/requests';
import config from '../config';

/**
 * @param {array} data data array to be imported on dojot, like the exported object.
 * @returns {array} return the imported objects on dojot.
 */
const post = (token, data) => new Promise(async (resolve, reject) => {
  const body = data;

  logger.debug('Will import data.');

  try {
    await Requests._delete(token, `${config.flow_broker_url}/v1/flow`);
    logger.debug('Flows deleted.');
    await Requests._delete(token, `${config.flow_broker_url}/v1/node`);
    logger.debug('Nodes deleted.');
    await requestNode.post(token, body.flowRemoteNodes);
    logger.debug('Nodes imported.');
    await requestFlow.post(token, body.flows);
    logger.debug('Flows imported.');
    await Requests.post(token, `${config.device_manager_url}/import`, { templates: body.templates, devices: body.devices });
    logger.debug('Devices and templates imported.');
    return resolve({ message: 'data imported!' });
  } catch (error) {
    logger.debug(`Received error on import data, ${error}. Rejecting the request`);
    return reject(error.toString());
  }
});

export default { post };
