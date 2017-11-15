import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<div className="row" style={{marginTop: '25px'}}>
				<div className="col-sm-12">
							<hr className="footer-hr"/>
			        <p className="footer-text">© Copyright 2017. Hacker News Clone. All Rights Reserved.</p>
				</div>
			</div>
		)
	}
}
