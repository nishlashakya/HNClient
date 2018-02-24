import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import moment from 'moment';

import {
  get as getThreadDetail,
  update as addCommentCount
} from '../../actions/threadActions';

import {
  add as addComment,
  get as getAllComments
 } from '../../actions/commentAction';
import { getUser } from '../../utils/sessionManager';

class ThreadDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment : ''
    }
  }

  componentDidMount = () => {
    this.props.getThreadDetail(this.props.params.id)
    .then((thread) => {
      this.props.getAllComments(thread._id);
    })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addComment = (e) => {
    e.preventDefault();
    if (!this.props.loggedInUser) {
      this.props.router.push('/login');
    } else {
      const payload = {
        comment : this.state.comment,
        threadId: this.props.threadDetail._id,
        commentedBy: this.props.loggedInUser.username
      }
      const commentCount = parseInt(this.props.threadDetail.commentCount);
      this.props.addCommentCount(payload.threadId, {commentCount: commentCount + 1});
      this.props.addComment(payload)
      .then((res) => {
        this.setState({
          comment : ''
        });
        this.props.getAllComments(payload.threadId);
      })
    }
  }

  render() {
    const thread = this.props.threadDetail;
    const comments = this.props.comments || [];
    return (
      <div className="container">
        <div className="thread-detail">
            <div className="thread-title">
            {thread.title}&nbsp;
              <span className="thread-link-domain">
                ({thread.url})
              </span>
            </div>
            <div className="thread-meta">
              <span className="thread-points">{thread.points} points</span> by&nbsp;
              <span className="thread-owner">{thread.createdBy}</span>&nbsp;
              <span className="thread-date">{moment(thread.createdDate).fromNow()}</span> |&nbsp;
              <span className="thread-comments">{comments.length} comments</span>
            </div>

            <form>
              <textarea rows="4" cols="50" name="comment" value={this.state.comment} onChange={this.handleChange}>

              </textarea>
              <br/>
              <p className="thread-meta"> If you haven't already, would you mind reading about HN's <a href="https://news.ycombinator.com/newswelcome.html" target="__blank">approach to comments</a> and <a href="https://news.ycombinator.com/newswelcome.html" target="__blank">site guidelines</a>? </p>
              <input id="comment-button" type="submit" value="Add Comment" onClick={this.addComment} />
            </form>
        </div>


        <div className="thread-comments">
          {
            comments.map((comment, id) => {
              return (
                <div className="comment" key={id}>
                  <div className="thread-comment-meta">
                    <span className="thread-comment-owner">{comment.commentedBy}</span>&nbsp;|&nbsp;
                    <span className="thread-comment-date">{moment(comment.createdDate).fromNow()}</span> &nbsp;
                  </div>
                  <div className="thread-comment">
                    {comment.comment}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    threadDetail: store.thread.thread,
    loggedInUser: store.user.loggedInUser,
    comments: store.comment.comments
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getThreadDetail,
    addComment,
    addCommentCount,
    getUser,
    getAllComments
  }, dispatch);
}

ThreadDetailPage.propTypes = {
  loggedInUser        : PropTypes.object.isRequired,
  threadDetail        : PropTypes.object.isRequired,
  comments            : PropTypes.array.isRequired,
  getThreadDetail     : PropTypes.func.isRequired,
  addComment          : PropTypes.func.isRequired,
  addCommentCount     : PropTypes.func.isRequired,
  getUser             : PropTypes.func.isRequired,
  getAllComments      : PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ThreadDetailPage));
