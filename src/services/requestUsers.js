import config from '../config';

import Requests from '../utils/requests';

const requestUser = () => new Promise((resolve, reject) => {
  Requests.makeRequest(config.auth_url)
    .then((obj) => {
      resolve(obj);
    })
    .catch((err) => {
      reject(err);
    });
});

export default requestUser;
