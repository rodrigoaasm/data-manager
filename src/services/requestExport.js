import { logger } from '@dojot/dojot-module-logger';
import requestDevice from './requestsDevice';
import requestFlow from './requestsFlow';
import requestTemplate from './requestsTemplate';

function clearTemplateRet(template) {
  template.forEach((obj) => {
    const item = obj;
    delete item.created;
    delete item.config_attrs;
    delete item.data_attrs;
    item.attrs.forEach((attrs) => {
      const attr = attrs;
      delete attr.created;
    });
  });
  return template;
}

function clearDeviceRet(devices) {
  devices.forEach((device) => {
    const item = device;
    const keys = Object.keys(item.attrs);
    const newAttrs = [];
    keys.forEach((key) => {
      item.attrs[key].forEach((obj) => {
        const aux = obj;
        delete aux.id;
        delete aux.created;
        delete aux.metadata;
        newAttrs.push(aux);
      });
    });
    delete item.attrs;
    item.attrs = newAttrs;
  });
  return devices;
}

const requestExport = () => new Promise((resolve, reject) => {
  logger.debug('Will export data');
  const requests = [
    requestDevice.get(),
    requestTemplate.get(),
    requestFlow.get(),
  ];
  Promise.all(requests)
    .then((ret) => {
      logger.debug('Data received.');
      const allData = {
        devices: clearDeviceRet(ret[0].devices),
        templates: clearTemplateRet(ret[1].templates),
        flows: ret[2].flows,
      };
      resolve(allData);
    })
    .catch((err) => {
      logger.debug(`Received error ${err}. Rejecting the request`);
      reject(err);
    });
});

export default requestExport;
