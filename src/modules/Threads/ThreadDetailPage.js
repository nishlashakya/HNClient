import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeAgo from 'react-timeago';

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
    const payload = {
      comment : this.state.comment,
      threadId: this.props.threadDetail._id,
      commentedBy: this.props.loggedInUser.username
    }
    const commentCount = parseInt(this.props.threadDetail.commentCount);
    console.log('commentCount..............', commentCount);
    this.props.addCommentCount(payload.threadId, {commentCount: commentCount + 1});
    this.props.addComment(payload)
    .then((res) => {
      this.setState({
        comment : ''
      });
      this.props.getAllComments(payload.threadId);
    })
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
              <TimeAgo className="thread-date" date={thread.createdDate}></TimeAgo> |&nbsp;
              <span className="thread-comments">{comments.length} comments</span>
            </div>

            <form>
              <textarea rows="4" cols="50" name="comment" value={this.state.comment} onChange={this.handleChange}>

              </textarea>
              <br/>
              <p className="thread-meta"> If you haven't already, would you mind reading about HN's <a href="https://news.ycombinator.com/newswelcome.html">approach to comments</a> and <a href="https://news.ycombinator.com/newswelcome.html">site guidelines</a>? </p>
              <input id="comment-button" type="submit" value="Add Comment" onClick={this.addComment} />
            </form>
        </div>


        <div className="thread-comments">
          {
            comments.map((comment, id) => {
              return (
                <div className="comment" key={id}>
                  <div className="thread-comment-meta">
                    <span className="thread-comment-owner">{comment.commentedBy}</span>|&nbsp;
                    <TimeAgo className="thread-comment-date" date={comment.createdDate}></TimeAgo> &nbsp;
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadDetailPage);
