import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
            <li className="thread-list-item" key={id}>
              <div className="thread-title">
                {thread.title}&nbsp;
                <span className="thread-link-domain">
                  ({thread.url})
                </span>
              </div>
              <div className="thread-meta">
                <span className="thread-points">{thread.points} points</span> by&nbsp;
                <span className="thread-owner">{thread.createdBy}</span>&nbsp;
                <span className="thread-date">25 mins ago</span> |&nbsp;
                <span className="thread-comments">3 comments</span>
              </div>
            </li>)
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
