import config from '../config';

import Requests from '../utils/requests';

const requestTemplate = () => new Promise((resolve, reject) => {
  Requests.makeRequest(`${config.device_manager_url}/template`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

const postTemplate = body => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj) => {
    const element = obj;
    calls.push(Requests.makePost(`${config.device_manager_url}/template`, element));
  });

  Promise.all(calls)
    .then((ret) => {
      let dataRet = {};
      const control = [];
      ret.forEach((data, index) => {
        dataRet.oldId = body[index].id;
        dataRet.newId = data.data.template.id;
        dataRet.newObject = data.data.template;
        control.push(dataRet);
        dataRet = {};
      });
      resolve(control);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { requestTemplate, postTemplate };
