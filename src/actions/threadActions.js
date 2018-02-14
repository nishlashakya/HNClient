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
