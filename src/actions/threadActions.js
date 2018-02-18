import * as api from '../services/threadServices';

export function add(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.add(data)
      .then(res => {
        dispatch(addSuccess(res));
        resolve(res);
      })
      .catch(err => {
        dispatch(addError(err));
        reject(err);
      })
    });
  }
}

function addSuccess(res) {
  return {
    type: 'ADD_THREAD_SUCCESS',
    res
  }
}

function addError(err) {
  return {
    type: 'ADD_THREAD_FAIL',
    err
  }
}

export function getAll() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.getAll()
      .then(res => {
        dispatch(getAllSuccess(res));
        resolve(res);
      })
      .catch(err => {
        dispatch(getAllError(err));
        reject(err);
      })
    });
  }
}

function getAllSuccess(res) {
  return {
    type: 'GET_ALL_THREADS_SUCCESS',
    res
  }
}

function getAllError(err) {
  return {
    type: 'GET_ALL_THREADS_FAIL',
    err
  }
}
export function get(id) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.get(id)
      .then(res => {
        dispatch(getSuccess(res));
        resolve(res);
      })
      .catch(err => {
        dispatch(getError(err));
        reject(err);
      })
    });
  }
}

function getSuccess(res) {
  return {
    type: 'GET_THREAD_SUCCESS',
    res
  }
}

function getError(err) {
  return {
    type: 'GET_THREAD_FAIL',
    err
  }
}
