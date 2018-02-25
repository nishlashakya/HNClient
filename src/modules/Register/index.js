import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { registerUser } from '../../actions/userActions';

class RegisterPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			rePassword: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.registerUser(this.state)
		.then((res) => {
			this.props.router.push('/login');
			console.log('registered successfully!');
		})
		.catch((err) => {
			console.log('errror.................', err);
		})
	}
	render() {
		return (
			<div className="container">
				<h3>Register</h3><br />
				<div className="register_form">
					<form>
						<div className="form-row">
							<label> Username: </label>
							<span className="form-input"><input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> Email: </label>
							<span className="form-input"><input type="email" name="email" value={this.state.email} onChange={this.handleChange}/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> Password: </label>
							<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
						</div>
						<br/>
						{/* <div className="form-row">
							<label> Re-Type Password: </label>
							<input type="password" name="rePassword" value={this.state.rePassword} onChange={this.handleChange} />
						</div> */}
						<br/>
						<input type="submit" onClick={this.handleSubmit} value="Register"/>
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
		registerUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(RegisterPage))
