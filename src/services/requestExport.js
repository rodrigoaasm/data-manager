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

function clearDeviceRet(devices, templates) {
  devices.forEach((device) => {
    const item = device;
    delete item.created;
    delete item.updated;
    const keys = Object.keys(item.attrs);
    const newAttrs = [];
    keys.forEach((key) => {
      item.attrs[key].forEach((obj) => {
        const aux = obj;
        templates.forEach((template) => {
          template.attrs.forEach((templateAttr) => {
            if (templateAttr.id === aux.id) {
              const templateKeys = Object.keys(templateAttr);
              delete aux.created;
              let allEqual = true;
              templateKeys.forEach((keyValue) => {
                if ((aux[keyValue] === templateAttr[keyValue]) && (allEqual === true)) {
                  allEqual = true;
                } else {
                  allEqual = false;
                }
              });
              if (!allEqual) {
                newAttrs.push(aux);
              }
            }
          });
        });
      });
    });
    delete item.attrs;
    item.attrs = newAttrs;
  });
  return devices;
}

const requestExport = token => new Promise((resolve, reject) => {
  logger.debug('Will export data');
  const requests = [
    requestDevice.get(token),
    requestTemplate.get(token),
    requestFlow.get(token),
  ];
  Promise.all(requests)
    .then((ret) => {
      logger.debug('Data received.');
      const templatesRet = clearTemplateRet(ret[1].templates);
      const allData = {
        devices: clearDeviceRet(ret[0].devices, templatesRet),
        templates: templatesRet,
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
