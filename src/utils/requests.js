import axios from 'axios';
import { logger } from '@dojot/dojot-module-logger';

const get = (token, urlRequest) => new Promise((resolve, reject) => {
  logger.debug(`Will call ${urlRequest}`);
  const options = {
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
  };
  axios(urlRequest, options)
    .then((ret) => {
      resolve(ret.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const post = (token, urlRequest, body) => new Promise((resolve, reject) => {
  logger.debug(`Will call ${urlRequest}`);
  axios({
    method: 'post',
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
    url: urlRequest,
    data: body,
  })
    .then((ret) => {
      resolve(ret);
    })
    .catch((err) => {
      reject(err.toString());
    });
});

const _delete = (token, urlRequest) => new Promise((resolve, reject) => {
  logger.debug(`Will call delete ${urlRequest}`);
  axios({
    method: 'delete',
    headers: {
      authorization: token,
      'content-type': 'application/json',
    },
    url: urlRequest,
  })
    .then((ret) => {
      resolve(ret);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { get, post, _delete };
