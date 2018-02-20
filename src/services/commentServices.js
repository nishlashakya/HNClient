import axios from 'axios';
import APIConstants from '../constants/APIConstants';

export function add(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.COMMENTS, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}

export function get(threadId) {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.COMMENTS + threadId)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}
