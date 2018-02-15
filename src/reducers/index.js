import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { threadReducer } from './threadReducer';

const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
	thread: threadReducer
})

export default reducer;
