import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { add as addThread } from '../../actions/threadActions';

class AddThread extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fields : {
				title: '',
				url: ''
			}
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			fields: {
				[e.target.name] : e.target.value
			}
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addThread(this.state.fields)
		.then((res) => {
			console.log('jjjjjjjjjjj', res);
		})
		.catch((err) => {
			console.log('ggggggggggggg', err);
		})
	}

	render() {
		return (
			<div className="container">
				<h3><b>Submit</b></h3><br />
				<div className="well submit_form">
					<form>
						<div className="form-row">
							<label> Title: </label>
							<span className="form-input"><input type="text" name="title" value={this.state.fields.title} onChange={this.handleChange}/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> url: </label>
							<input type="text" name="url" value={this.state.fields.url} onChange={this.handleChange} />
						</div>
						<br/>
						<input type="submit" value="Submit" onClick={this.handleSubmit} />
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
		addThread
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddThread);
