import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { updateUser as updateProfile } from '../../actions/userActions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const user = this.props.user;
    this.state = {
      fields : {
        username: user.username || '',
        createdDate: user.createdDate || '',
        karma: user.karma || '',
        about: user.about || '',
        email: user.email|| ''
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

  updateProfile = (e) => {
    e.preventDefault();
    this.props.updateProfile(this.props.user._id, this.state.fields);
  }

  render() {
    const user = this.state.fields
    return (
      <div className="container">
        <form>
        <table className="lightFont">
          <tr className="topLeft">
            <td>user:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>created:</td>
            <td>{moment(user.createdDate).fromNow()}</td>
          </tr>
          <tr>
            <td>karma:</td>
            <td>{user.karma}</td>
          </tr>
          <tr>
            <td>about:</td>
            <td>
              <textarea cols="60" rows="5" name="about" value={user.about} onChange={this.handleChange}></textarea></td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{user.email}</td>
          </tr>
        </table>
        <br/>
        <input type="submit" value="update" onClick={this.updateProfile} />
      </form>
			</div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user : store.user.loggedInUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProfile
  }, dispatch);
}

Profile.propTypes = {
  user : PropTypes.object.isRequired,
  updateProfile : PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (Profile)
