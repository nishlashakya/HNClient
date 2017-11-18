import * as userServices from '../services/userServices';

export function loginUser(data) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      userServices.loginUser(data)
      .then(data => {
        dispatch(loginSuccess(data));
        resolve(data);
      })
      .catch(err => {
        dispatch(loginError(err));
        reject(err);
      })
    });
  }
}
