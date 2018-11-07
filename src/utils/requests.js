import axios from 'axios';
import generateToken from './generateToken';


const makeRequest = urlRequest => new Promise((resolve, reject) => {
  const token = generateToken();
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

const makePost = (urlRequest, body) => new Promise((resolve, reject) => {
  const token = generateToken();
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

const makeDelete = urlRequest => new Promise((resolve, reject) => {
  const token = generateToken();
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

export default { makeRequest, makePost, makeDelete };
