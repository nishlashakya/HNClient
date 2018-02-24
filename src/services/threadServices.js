import axios from 'axios';
import APIConstants from '../constants/APIConstants';

import { getUserToken } from '../utils/sessionManager';

axios.defaults.headers.Authorization = getUserToken();

export function add(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.THREADS, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}

export function getAll() {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.THREADS)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}

export function get(id) {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.THREADS + id)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}

export function update(id, payload) {
  return new Promise((resolve, reject) => {
    axios.put(APIConstants.THREADS + id, payload)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}
