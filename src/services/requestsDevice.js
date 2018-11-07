import config from '../config';

import Requests from '../utils/requests';

const requestDevice = () => new Promise((resolve, reject) => {
  Requests.makeRequest(`${config.device_manager_url}/device`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

const postDevice = body => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj) => {
    const element = obj;
    calls.push(Requests.makePost(`${config.device_manager_url}/device`, element));
  });

  Promise.all(calls)
    .then((ret) => {
      let dataRet = {};
      const control = [];
      ret.forEach((data, index) => {
        dataRet.oldId = body[index].id;
        dataRet.newId = data.data.devices[0].id;
        dataRet.newObject = data.data.devices;
        control.push(dataRet);
        dataRet = {};
      });
      resolve(control);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { requestDevice, postDevice };
