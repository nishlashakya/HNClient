import axios from 'axios';
import APIConstants from '../constants/APIConstants';

import { getUserToken } from '../utils/sessionManager';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': getUserToken()
  }
};

export function add(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.COMMENTS, data, config)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}

export function get(threadId) {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.COMMENTS + threadId, config)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}
