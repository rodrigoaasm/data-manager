import { logger } from '@dojot/dojot-module-logger';
import requestDevice from './requestsDevice';
import requestFlow from './requestsFlow';
import requestTemplate from './requestsTemplate';

// import requestUser from './requestUsers';

function clearTemplateRet(template) {
  template.forEach((obj) => {
    const item = obj;
    delete item.created;
    delete item.status;
    delete item.templates;
    delete item.data_attrs;
    delete item.config_attrs;
    item.attrs.forEach((attrs) => {
      const attr = attrs;
      delete attr.created;
      delete attr.template_id;
      delete attr.id;
    });
  });
  return template;
}

function clearDeviceRet(devices) {
  devices.forEach((device) => {
    const item = device;
    delete item.attrs;
    delete item.created;
    delete item.status;
  });
  return devices;
}

const requestExport = () => new Promise((resolve, reject) => {
  logger.debug('Will export data');
  const requests = [
    requestDevice.requestDevice(),
    requestTemplate.requestTemplate(),
    requestFlow.requestFlows(),
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
