import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeAgo from 'react-timeago';
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
    console.log('pppppppppppppppppp', this.props);
    const threads = this.props.threads;
    return(
      <div className="App">
				<ol className="thread-list">
          {threads.map((thread, id) => {
            console.log(',,,,,123,,,,,,,,,,', thread);
            return (
              <Link to={`/thread/${thread._id}`}  key={id}>
              <li className="thread-list-item">
                  <div className="thread-title">
                    {thread.title}&nbsp;
                    <span className="thread-link-domain">
                      (<a href={thread.url} target="_blank">{thread.url}</a>)
                    </span>
                  </div>
                <div className="thread-meta">
                  <span className="thread-points">{thread.points} points</span> by&nbsp;
                  <span className="thread-owner">{thread.createdBy}</span>&nbsp;
                  <TimeAgo date={thread.createdDate} /> | &nbsp;
                  <span className="thread-comments">3 comments</span>
                </div>
              </li>
            </Link>
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
