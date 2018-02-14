import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUser } from '../../actions/userActions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  // componentDidMount = () => {
  //   console.log('props.............', this.props.params);
  //   this.props.getUser(this.props.params.id)
  // }

  render() {
    console.log('llllllllll', this.props);
    const user = this.props.user
    return (
      <div className="container">
        <table className="lightFont">
          <tr className="topLeft">
            <td>user:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>created:</td>
            <td>{user.createdDate}</td>
          </tr>
          <tr>
            <td>karma:</td>
            <td>{user.karma}</td>
          </tr>
          <tr>
            <td>about:</td>
            <td>
              <textarea cols="60" rows="5" name="about" value={user.about}></textarea></td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{user.email}</td>
          </tr>
        </table>
			</div>
    );
  }
}

const mapStateToProps = (store) => {
  console.log(',,,,,,,,,,,,,,sd', store.user);
  return {
    user : store.user.loggedInUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
}

Profile.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile)
