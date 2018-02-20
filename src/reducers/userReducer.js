import { getUser, logoutUser, saveUser } from '../utils/sessionManager'
const initialState = {
  loggedInUser : getUser()
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

    case 'LOGIN_USER_SUCCESS':
      saveUser(action.res);
      return {
        ...state,
        loggedInUser: action.res
      }

    case 'LOGOUT_USER':
      logoutUser();
      return {
        ...state
      }

		default:
			return {...state}
	}
}
