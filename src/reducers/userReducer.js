import { getUser } from '../utils/sessionManager'
const initialState = {
  loggedInUser : getUser()
}

export function userReducer(state=initialState, action) {
	switch (action.type) {

		default:
			return {...state}
	}
}
