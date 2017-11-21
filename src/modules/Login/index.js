import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginUser } from '../../actions/userActions';

class LoginPage extends Component {

	constructor(props) {
		super(props);
	}

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

	const mapStateToProps = (store) => {
		return {

		}
	}

	const mapDispatchToProps = (dispatch) => {
		return bindActionCreators({
			loginUser
		}, dispatch);
	}
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(LoginPage))
