import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './modules/App';
import Homepage from './modules/Home';
import LoginPage from './modules/Login';
import RegisterPage from './modules/Register';

import AddThread from './modules/Threads/addThread';
import ViewThreadPage from './modules/Threads/view';

import UserProfile from './modules/Users/Profile';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Homepage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/register" component={RegisterPage} />

		<Route path="/thread/add" component={AddThread} />
		<Route path="/thread/view" component={ViewThreadPage} />

		<Route path="/profile/:id" component={UserProfile} />
	</Route>
)
