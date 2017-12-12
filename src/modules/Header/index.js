import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import './style.css';

class Header extends Component {

  constructor(props) {
    super(props);

  }
	render() {
		return (
			<nav className="navbar navbar-inverse" id="myNav">
				<div className="container-fluid">
					<div className="navbar-header">

						<Link to={'/'} className="navbar-brand"><img src="images/logo.gif" width="18"/><b>Hacker News </b></Link>
						<span className="navbar-link">
								<Link to={'#'}>New </Link>&nbsp;|&nbsp;
								<Link to={'#'}>Comments</Link>&nbsp;|&nbsp;
								<Link to={'/thread/add'}>Submit</Link>&nbsp;|&nbsp;
						</span>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {!this.props.loggedInUser ?
						<ul className="nav navbar-nav navbar-right">
							<li><Link to={'/login'}>Login</Link></li>
							<li><Link to={'/register'}>Register</Link></li>
						</ul>
            :
            <ul className="nav navbar-nav navbar-right">
              <li><Link to={'/login'}>{this.props.loggedInUser.firstName}</Link></li>
              <li><Link to={'/register'}>Logout</Link></li>
            </ul>
          }
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (store) => {
  console.log('..................', store.user.loggedInUser);
  return {
    loggedInUser: store.user.loggedInUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Header))
