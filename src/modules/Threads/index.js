import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { Link } from 'react-router';

import { getAll as getAllThreads } from '../../actions/threadActions';

class ThreadListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getAllThreads();
  }

  render() {
    const threads = this.props.threads;
    return(
      <div className="App">
				<ol className="thread-list">
          {threads.map((thread, id) => {
            return (
              <li className="thread-list-item" key={id}>
                  <div className="thread-title">
                    {thread.title}&nbsp;
                    <span className="thread-link-domain">
                      (<a href={thread.url} target="_blank">{thread.url}</a>)
                    </span>
                  </div>
                <Link to={`/thread/${thread._id}`} key={id}>
                <div className="thread-meta">
                  <span className="thread-points">{thread.points} points</span> by&nbsp;
                  <span className="thread-owner">{thread.createdBy}</span>&nbsp;
                  <span className="thread-comment-date">{moment(thread.createdDate).fromNow()}</span> &nbsp;
                  <span className="thread-comments">{thread.commentCount} comments</span>
                </div>
              </Link>
              </li>
            )
          })}
				</ol>
			</div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    threads : store.thread.threads
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllThreads
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadListPage)
