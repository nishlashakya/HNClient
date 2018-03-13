import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import { add as addThread } from '../../actions/threadActions';
import { getUser } from '../../utils/sessionManager';

class AddThread extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fields : {
				title: '',
				url: '',
				createdBy: this.props.loggedInUser.username
			}
		}
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			fields: {
				...this.state.fields,
				[e.target.name] : e.target.value
			}
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addThread(this.state.fields)
		.then((res) => {
			this.props.router.push('/HNClient/');
		})
		.catch((err) => {
			this.props.router.push('/HNClient/thread/add/');
		})
	}

	render() {
		return (
			<div className="container">
				<form>

				<table className="lightFont">
					<tbody>
						<tr>
							<td>title</td>
							<td><input type="text" name="title" value={this.state.fields.title} onChange={this.handleChange}/></td>
						</tr>
						<tr>
							<td>url</td>
							<td><input type="text" name="url" value={this.state.fields.url} onChange={this.handleChange} /></td>
						</tr>
						<tr>
							<td></td>
							<td className="thread-meta">
								Leave url blank to submit a question for discussion. If there
								is no url, the text (if any) will appear at the top of the
								thread.<br/><br/>
								You can also submit via <a href="https://news.ycombinator.com/bookmarklet.html" target="__blank"><u>bookmarklet</u></a>.
							</td>
						</tr>
					</tbody>
				</table>
				<input type="submit" value="Submit" onClick={this.handleSubmit} />
			</form>
		</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		loggedInUser : store.user.loggedInUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addThread
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddThread));
