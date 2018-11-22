import config from '../config';

import Requests from '../utils/requests';

const get = () => new Promise((resolve, reject) => {
  const dataReturn = {
    templates: [],
  };
  const fill = (data) => {
    data.templates.forEach((item) => {
      dataReturn.templates.push(item);
    });
  };

  const request = (url) => {
    Requests.get(url)
      .then((obj) => {
        fill(obj);
        if (obj.pagination.has_next) {
          request(`${config.device_manager_url}/template?page_num=${obj.pagination.next_page}`);
        } else {
          resolve(dataReturn);
        }
      })
      .catch((err) => {
        reject(err);
      });
  };

  request(`${config.device_manager_url}/template`);
});

const post = body => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj) => {
    const element = obj;
    calls.push(Requests.post(`${config.device_manager_url}/template`, element));
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

export default { get, post };
