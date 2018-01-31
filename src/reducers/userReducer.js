import { getUser, logoutUser } from '../utils/sessionManager'
const initialState = {
  loggedInUser : getUser()
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

    case 'LOGIN_USER_SUCCESS':
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
