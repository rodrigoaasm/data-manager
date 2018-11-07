import config from '../config';

import Requests from '../utils/requests';

const requestFlows = () => new Promise((resolve, reject) => {
  Requests.makeRequest(`${config.flow_broker_url}/v1/flow`)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});


const postFlow = body => new Promise((resolve, reject) => {
  const calls = [];
  body.forEach((obj) => {
    const element = obj;
    calls.push(Requests.makePost(`${config.flow_broker_url}/v1/flow`, element));
  });

  Promise.all(calls)
    .then((flows) => {
      const ret = [];
      flows.forEach((item) => {
        ret.push(item.data);
      });
      resolve(ret);
    })
    .catch((err) => {
      reject(err);
    });
});


export default { requestFlows, postFlow };
