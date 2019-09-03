import config from '../config';

import Requests from '../utils/requests';

const get = token => new Promise((resolve, reject) => {
  Requests.get(token, `${config.flow_broker_url}/v1/node`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});


const post = (token, body) => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj) => {
    const element = obj;
    calls.push(Requests.post(token, `${config.flow_broker_url}/v1/node`, element));
  });

  Promise.all(calls)
    .then((nodes) => {
      const ret = [];
      nodes.forEach((item) => {
        ret.push(item.data);
      });
      resolve(ret);
    })
    .catch((err) => {
      reject(err);
    });
});


export default { get, post };
