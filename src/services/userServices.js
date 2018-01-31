import axios from 'axios';
import APIConstants from './../constants/APIConstants';

// axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export function loginUser(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.LOGIN, data)
    .then(res => (resolve(res.data)))
    .catch(err => (reject(err)));
  });
}

export function registerUser(data) {
  return new Promise((resolve, reject) => {
    axios.post(APIConstants.REGISTER, data)
    .then(res => (resolve(res)))
    .catch(err => (reject(err)));
  });
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    axios.get(APIConstants.USERS + id)
    .then((res) => (resolve(res)))
    .catch((err) => (reject(err)));
  });
}
