import { getUser, logoutUser, saveUserToken, saveUser } from '../utils/sessionManager'
const initialState = {
  loggedInUser : getUser()
}

export function userReducer(state=initialState, action) {
  if (action.err === 'Unauthorized') {
    logoutUser();
    location.href='/';
  }

	switch (action.type) {

    case 'LOGIN_USER_SUCCESS':
      saveUser(action.res.user);
      saveUserToken(action.res.token);
      return {
        ...state,
        loggedInUser: action.res.user
      }

    case 'LOGOUT_USER':
      logoutUser();
      return {
        ...state
      }

    case 'UPDATE_USER_SUCCESS':
      saveUser(action.res.data);
      return {
        ...state,
        loggedInUser: action.res.data
      }

		default:
			return {...state}
	}
}
