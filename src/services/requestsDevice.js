import config from '../config';

import Requests from '../utils/requests';

const get = () => new Promise((resolve, reject) => {
  const dataReturn = {
    devices: [],
  };
  const fill = (data) => {
    data.devices.forEach((item) => {
      dataReturn.devices.push(item);
    });
  };

  const request = (url) => {
    Requests.get(url)
      .then((obj) => {
        fill(obj);
        if (obj.pagination.has_next) {
          request(`${config.device_manager_url}/device?page_num=${obj.pagination.next_page}`);
        } else {
          resolve(dataReturn);
        }
      })
      .catch((err) => {
        reject(err);
      });
  };

  request(`${config.device_manager_url}/device`);
});

const post = body => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj) => {
    const element = obj;
    calls.push(Requests.post(`${config.device_manager_url}/device`, element));
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

export default { get, post };
