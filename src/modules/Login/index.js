import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginUser } from '../../actions/userActions';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('.............state', this.state);
		this.props.loginUser(this.state)
		.then((res) => {
      this.props.router.push('/');
			console.log('logged in..............', res);
		})
	}

	render() {
		return (
			<div className="container">
				<h3><b>Login</b></h3><br />
				<div className="well login_form">
					<form>
						<div className="form-row">
							<label> Username: </label>
							<span className="form-input"><input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> Password: </label>
							<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
						</div>
						<br/>
						<input type="submit" value="Login" onClick={this.handleSubmit} />
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
