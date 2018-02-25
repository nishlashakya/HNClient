import * as api from '../services/commentServices';

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
    type: 'ADD_COMMENT_SUCCESS',
    res
  }
}

function addError(err) {
  return {
    type: 'ADD_COMMENT_FAIL',
    err
  }
}
export function get(threadId) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.get(threadId)
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
    type: 'GET_ALL_COMMENTS_SUCCESS',
    res
  }
}

function getError(err) {
  return {
    type: 'GET_ALL_COMMENTS_FAIL',
    err
  }
}
