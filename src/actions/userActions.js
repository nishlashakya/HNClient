import * as userServices from '../services/userServices';

export function loginUser(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      userServices.loginUser(data)
      .then(res => {
        dispatch(loginSuccess(res));
        resolve(res);
      })
      .catch(err => {
        dispatch(loginError(err));
        reject(err);
      })
    });
  }
}

function loginSuccess(res) {
  return {
    type: 'LOGIN_USER_SUCCESS',
    res
  }
}

function loginError(err) {
  return {
    type: 'LOGIN_USER_FAIL',
    err
  }
}

export function registerUser(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      userServices.registerUser(data)
      .then((res) => {
        dispatch(registerUserSuccess(res));
        resolve(res);
      })
      .catch((err) => {
        dispatch(registerUserError(err));
        reject(err);
      })
    });
  }
}

function registerUserSuccess(res) {
  return {
    type: 'REGISTER_USER_SUCCESS',
    res
  }
}

function registerUserError(err) {
  return {
    type: 'REGISTER_USER_ERROR',
    err
  }
}

export function updateUser(id, data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      userServices.updateUser(id, data)
      .then((res) => {
        dispatch(updateUserSuccess(res));
        resolve(res);
      })
      .catch((err) => {
        dispatch(updateUserError(err));
        reject(err);
      })
    });
  }
}

function updateUserSuccess(res) {
  return {
    type: 'UPDATE_USER_SUCCESS',
    res
  }
}

function updateUserError(err) {
  return {
    type: 'UPDATE_USER_ERROR',
    err
  }
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  }
}
