import axios from 'axios';
// import APIConstants from '../constants/APIConstants';

export function loginUser(data) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3001/users/login', data)
    .then(res => (resolve(res)))
    .catch(err => (reject(err.response.data)));
  });
}

export function registerUser(data) {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3001/users/register', data)
    .then(res => (resolve(res)))
    .catch(err => (reject(err)));
  });

}
