import React, { Component } from 'react';

export default class AddThread extends Component {

	render() {
		return (
			<div className="container">
				<h3><b>Submit</b></h3><br />
				<div className="well submit_form">
					<form>
						<div className="form-row">
							<label> Title: </label>
							<span className="form-input"><input type="text" id="title"/></span>
						</div>
						<br/>
						<div className="form-row">
							<label> url: </label>
							<input type="text" id="url" />
						</div>
						<br/>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}
