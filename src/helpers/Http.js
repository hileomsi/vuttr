import axios from 'axios';
import config from '../config';

const { baseURL } = config;

const configAxiosDefault = {
  headers: {
    'Content-Type': 'application/json',
  }
};

const Http = axios.create({
  baseURL: baseURL,
  timeout: 10000, 
});

function get(url, config) {
  console.log('config => ', config);
  return Http.get(url, {
    ...configAxiosDefault,
    ...config
  })
    .then(response => response.data);
}

function post(url, data, config) {
  return Http.post(url, data, {
    ...configAxiosDefault,
    ...config
  })
    .then(response => response.data);
}

function patch(url, data, config) {
  return Http.patch(url, data, {
    ...configAxiosDefault,
    ...config
  })
    .then(response => response.data);
}

function put(url, data, config) {
  return Http.put(url, data, {
    ...configAxiosDefault,
    ...config
  })
    .then(response => response.data);
}

function deleteHttp(url, config) {
  return Http.delete(url, {
    ...configAxiosDefault,
    ...config
  })
    .then(response => response.data);
}

export default {
  get,
  post,
  patch,
  put,
  delete: deleteHttp,
};