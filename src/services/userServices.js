import axios from 'axios';
import APIConstants from '../constants/APIConstants';

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

export function updateUser(id, data) {
  return new Promise((resolve, reject) => {
    axios.put(APIConstants.USERS + id, data)
    .then((res) => (resolve(res)))
    .catch((err) => (reject(err)));
  });
}
