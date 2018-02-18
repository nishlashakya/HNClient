import axios from 'axios';
import APIConstants from '../constants/APIConstants';

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
