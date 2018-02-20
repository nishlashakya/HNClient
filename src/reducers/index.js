import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { userReducer } from './userReducer';
import { threadReducer } from './threadReducer';
import { commentReducer } from './commentReducer';

const reducer = combineReducers({
	counter: counterReducer,
	user: userReducer,
	thread: threadReducer,
	comment: commentReducer
})

export default reducer;
