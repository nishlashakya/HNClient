import { getUser, logoutUser } from '../utils/sessionManager'
const initialState = {
  threads: []
}

export function threadReducer(state=initialState, action) {
	switch (action.type) {

    case 'ADD_THREAD_SUCCESS':
      return {
        ...state,
        threads: state.threads.concat(action.res)
      }

    case 'GET_ALL_THREADS_SUCCESS':
      return {
        ...state,
        threads: action.res
      }

		default:
			return {...state}
	}
}
