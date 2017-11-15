import React, { Component } from 'react';

export default class RegisterPage extends Component {

	render() {
		return (
			<div className="container">
				<h3>Register</h3><br />
				<div className="well register_form">
					<form>
						<div className="form-row">
							<label> Username: </label>
							<span className="form-input"><input type="text" id="username"/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> Email: </label>
							<span className="form-input"><input type="email" id="email"/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> Password: </label>
							<input type="password" id="password" />
						</div>
						<br/>
						<div className="form-row">
							<label> Re-Type Password: </label>
							<input type="password" id="re-password" />
						</div>
						<br/>
						<input type="submit" value="Register" />
					</form>
				</div>
			</div>
		);
	}
}
