import { logger } from '@dojot/dojot-module-logger';
import requestDevice from './requestsDevice';
import requestFlow from './requestsFlow';
import requestTemplate from './requestsTemplate';
import requestNode from './requestsNode';
import requestCron from './requestCron';

function clearTemplateRet(templates) {
  for (let i = 0; i < templates.length; i += 1) {
    const template = templates[i];
    delete template.created;
    delete template.config_attrs;
    delete template.data_attrs;
    for (let j = 0; j < template.attrs.length; j += 1) {
      delete template.attrs[j].created;
    }
  }
  return templates;
}

function clearDeviceRet(devices) {
  for (let i = 0; i < devices.length; i += 1) {
    const device = devices[i];
    delete device.created;
    delete device.updated;
    const deviceTemplates = Object.keys(device.attrs);
    const overridenAttrs = [];
    for (let j = 0; j < deviceTemplates.length; j += 1) {
      const attrsFromTemplate = device.attrs[deviceTemplates[j]];
      for (let k = 0; k < attrsFromTemplate.length; k += 1) {
        const deviceAttr = attrsFromTemplate[k];
        if ((deviceAttr.is_static_overridden)
        && (deviceAttr.is_static_overridden === true)) {
          overridenAttrs.push(deviceAttr);
        } else if (deviceAttr.metadata) {
          for (let l = 0; l < deviceAttr.metadata.length; l += 1) {
            const deviceMetadata = deviceAttr.metadata[l];
            if ((deviceMetadata.is_static_overridden)
            && (deviceMetadata.is_static_overridden === true)) {
              overridenAttrs.push(deviceAttr);
            }
          }
        }
      }
    }
    device.attrs = overridenAttrs;
  }
  return devices;
}

const requestExport = token => new Promise((resolve, reject) => {
  logger.debug('Will export data');
  const requests = [
    requestDevice.get(token),
    requestTemplate.get(token),
    requestNode.get(token),
    requestFlow.get(token),
    requestCron.get(token)

  ];
  Promise.all(requests)
    .then((ret) => {
      logger.debug('Data received.');
      const allData = {
        devices: clearDeviceRet(ret[0].devices),
        templates: clearTemplateRet(ret[1].templates),
        flowRemoteNodes: ret[2].nodes,
        flows: ret[3].flows,
        cronJobs: ret[4]
      };
      resolve(allData);
    })
    .catch((err) => {
      logger.debug(`Received error ${err}. Rejecting the request`);
      reject(err);
    });
});

export default requestExport;
