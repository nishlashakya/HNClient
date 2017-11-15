import React, { Component } from 'react';

export default class LoginPage extends Component {

	render() {
		return (
			<div className="container">
				<h3><b>Login</b></h3><br />
				<div className="well login_form">
					<form>
						<div className="form-row">
							<label> Username: </label>
							<span className="form-input"><input type="text" id="username"/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> Password: </label>
							<input type="password" id="password" />
						</div>
						<br/>
						<input type="submit" value="Login" />
					</form>
				</div>
			</div>
		);
	}
}
