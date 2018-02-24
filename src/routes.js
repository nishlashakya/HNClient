import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './modules/App';
import Homepage from './modules/Home';
import LoginPage from './modules/Login';
import RegisterPage from './modules/Register';

import AddThread from './modules/Threads/addThread';
import ThreadListPage from './modules/Threads/index';
import ThreadDetailPage from './modules/Threads/ThreadDetailPage';

import UserProfile from './modules/Users/Profile';

function requireAuth(nextState, replace, callback) {
	const login = localStorage.getItem('user');
	if (!login) replace ('/login')
	return callback()
}

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ThreadListPage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/register" component={RegisterPage} />

		<Route path="/thread/add" component={AddThread} onEnter={requireAuth}/>
		<Route path="/thread/view" component={ThreadListPage} />
		<Route path="/thread/:id" component={ThreadDetailPage} />

		<Route path="/profile/:id" component={UserProfile} onEnter={requireAuth} />
	</Route>
)
