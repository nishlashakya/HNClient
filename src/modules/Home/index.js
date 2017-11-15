import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../../actions/counterActions';

import Counter from './Counter';

class Homepage extends Component {

	render() {
		return (
			<div className="App">
				<ol className="thread-list">
					<li className="thread-list-item">
						<div className="thread-title">
							WebAssembly support now shipping in all major browsers&nbsp;
							<span className="thread-link-domain">
								(facebook.com)
							</span>
						</div>
						<div className="thread-meta">
							<span className="thread-points">25 points</span> by&nbsp;
							<span className="thread-owner">nishlapunk</span>&nbsp;
							<span className="thread-date">25 mins ago</span> |&nbsp;
							<span className="thread-comments">3 comments</span>
						</div>
					</li>
					<li className="thread-list-item">
						<div className="thread-title">
							There are over a billion outdated Android devices in use&nbsp;
							<span className="thread-link-domain">
								(nishla.com)
							</span>
						</div>
						<div className="thread-meta">
							<span className="thread-points">25 points</span> by&nbsp;
							<span className="thread-owner">nishlapunk</span>&nbsp;
							<span className="thread-date">25 mins ago</span> |&nbsp;
							<span className="thread-comments">3 comments</span>
						</div>
					</li>
					<li className="thread-list-item">
						<div className="thread-title">
							ACID transactions in a globally distributed database&nbsp;
							<span className="thread-link-domain">
								(acid.com)
							</span>
						</div>
						<div className="thread-meta">
							<span className="thread-points">25 points</span> by&nbsp;
							<span className="thread-owner">nishlapunk</span>&nbsp;
							<span className="thread-date">25 mins ago</span> |&nbsp;
							<span className="thread-comments">3 comments</span>
						</div>
					</li>
					<li className="thread-list-item">
						<div className="thread-title">
								The Apple Watch can detect hypertension and sleep apnea, a new study suggests&nbsp;
								<span className="thread-link-domain">
									(apple.com)
								</span>
						</div>
						<div className="thread-meta">
							<span className="thread-points">25 points</span> by&nbsp;
							<span className="thread-owner">nishlapunk</span>&nbsp;
							<span className="thread-date">25 mins ago</span> |&nbsp;
							<span className="thread-comments">3 comments</span>
						</div>
					</li>
				</ol>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return store.counter;
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(counterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
