import { logger } from '@dojot/dojot-module-logger';
import requestFlow from './requestsFlow';
import Requests from '../utils/requests';
import config from '../config';

async function deleteAllFlows(token) {
  logger.debug('Deleting all flows.');
  await Requests._delete(token, `${config.flow_broker_url}/v1/flow`);
}

/**
 * @param {array} data data array to be imported on dojot, like the exported object.
 * @returns {array} return the imported objects on dojot.
 */
const post = (token, data) => new Promise(async (resolve, reject) => {
  logger.debug('Will import data.');
  try {
    await deleteAllFlows(token);
  } catch (error) {
    reject(error.toString());
    return;
  }

  const body = data;
  
  requestFlow.post(token, body.flows).then((newflows) => {
    logger.debug('Flows imported.');

      Requests.post(token, `${config.device_manager_url}/import`, {templates: body.templates, devices: body.devices}).then(res => {
        logger.debug('Devices and templates imported.');
        resolve({'message': 'data imported!'});
      })
      .catch((err) => {
        logger.debug(`Received error on import templates and devices, ${err}. Rejecting the request`);
        reject(err);
      });
  })
  .catch((err) => {
    logger.debug(`Received error on import flows, ${err}. Rejecting the request`);
    reject(err);
  });
  
});

export default { post };
