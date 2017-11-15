import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse" id="myNav">
				<div className="container-fluid">
					<div className="navbar-header">

						<Link to={'/'} className="navbar-brand"><img src="images/logo.gif" width="18"/><b>Hacker News </b></Link>
						<span className="navbar-link">
								<Link to={'#'}>New </Link>&nbsp;|&nbsp;
								<Link to={'#'}>Comments</Link>&nbsp;|&nbsp;
								<Link to={'/thread/add'}>Submit</Link>&nbsp;|&nbsp;
						</span>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li><Link to={'/login'}>Login</Link></li>
							<li><Link to={'/register'}>Register</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
