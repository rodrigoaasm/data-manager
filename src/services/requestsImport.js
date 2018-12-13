import { logger } from '@dojot/dojot-module-logger';
import requestsDevice from './requestsDevice';
import requestsTemplate from './requestsTemplate';
import requestFlow from './requestsFlow';
import Requests from '../utils/requests';
import config from '../config';

async function deleteAllData() {
  logger.debug('Deleting all devices.');
  await Requests._delete(`${config.device_manager_url}/device`);
  logger.debug('Deleting all templates.');
  await Requests._delete(`${config.device_manager_url}/template`);
  logger.debug('Deleting all flows.');
  await Requests._delete(`${config.flow_broker_url}/v1/flow`);
}

function changeIdTemplateDevice(newsIdTemplate, devices) {
  const deviceList = devices;
  deviceList.forEach((device, indexDevice) => {
    device.templates.forEach((templateId, index) => {
      newsIdTemplate.forEach((item) => {
        if (parseInt(item.oldId, 0) === parseInt(templateId, 0)) {
          deviceList[indexDevice].templates[index] = item.newId;
        }
      });
    });
  });
  return deviceList;
}

function changeIdDeviceFlow(newDevices, flows) {
  const flowsList = flows;
  flowsList.forEach((flow) => {
    flow.flow.forEach((objIn) => {
      const obj = objIn;
      if ((obj.type === 'device in') || (obj.type === 'device out') || (obj.type === 'actuate')) {
        newDevices.forEach((item) => {
          if (item.oldId === obj._device_id) {
            obj._device_id = item.newId;
            obj.device_source_id = `Device (${item.newId})`;
          }
        });
      }
    });
  });
  return flowsList;
}

function changeIdTemplateFlow(newflows, flows) {
  const flowsList = flows;
  flowsList.forEach((flow) => {
    flow.flow.forEach((objIn) => {
      const obj = objIn;
      if (obj.type === 'device template in') {
        newflows.forEach((item) => {
          if (item.oldId === obj.device_template_id) {
            obj.device_template_id = item.newId;
            obj.device_template.id = item.newId;
          }
        });
      }
    });
  });
  return flowsList;
}

/**
 * @param {array} data data array to be imported on dojot, like the exported object.
 * @returns {array} return the imported objects on dojot.
 */
const post = data => new Promise(async (resolve, reject) => {
  logger.debug('Will import data.');
  try {
    await deleteAllData();
  } catch (error) {
    reject(error.toString());
    return;
  }
  const body = data;
  requestsTemplate.post(body.templates)
    .then((templates) => {
      logger.debug('Templates imported.');
      body.templates = templates;
      body.devices = changeIdTemplateDevice(templates, body.devices);
      requestsDevice.post(body.devices)
        .then((devices) => {
          logger.debug('Devices imported.');
          body.devices = devices;
          body.flows = changeIdDeviceFlow(devices, body.flows);
          body.flows = changeIdTemplateFlow(templates, body.flows);
          requestFlow.post(body.flows)
            .then((newflows) => {
              logger.debug('Flows imported.');
              const bodyTemplates = body.templates;
              body.templates = [];
              bodyTemplates.forEach((item) => {
                body.templates.push(item.newObject);
              });

              const bodyDevices = body.devices;
              body.devices = [];
              bodyDevices.forEach((item) => {
                body.devices.push(item.newObject[0]);
              });

              body.flows = newflows;
              logger.debug('Resolving importation.');
              resolve(body);
            })
            .catch((err) => {
              logger.debug(`Received error on import flows, ${err}. Rejecting the request`);
              reject(err);
            });
        })
        .catch((err) => {
          logger.debug(`Received error on import Devices, ${err}. Rejecting the request`);
          reject(err);
        });
    })
    .catch((err) => {
      logger.debug(`Received error on import Templates, ${err}. Rejecting the request`);
      reject(err);
    });
});

export default { post };
