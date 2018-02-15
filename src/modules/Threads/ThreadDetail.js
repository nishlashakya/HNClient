import React, {PropTypes} from 'react';

export default class ThreadDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="thread-detail">
            <div className="thread-title">
              WebAssembly support now shipping in all major browsers&nbsp;
              <span className="thread-link-domain">
                (facebook.com)
              </span>
            </div>
            <div className="thread-meta">
              <span className="thread-points">25 points</span> by&nbsp;
              <span className="thread-owner">nishlapunk</span>&nbsp;
              <span className="thread-date">25 mins ago</span> |&nbsp;
              <span className="thread-comments">3 comments</span>
            </div>

            <form>
              <textarea rows="4" cols="50">
              </textarea>
              <br/>
              <p className="thread-meta"> If you haven't already, would you mind reading about HN's <a href="https://news.ycombinator.com/newswelcome.html">approach to comments</a> and <a href="https://news.ycombinator.com/newswelcome.html">site guidelines</a>? </p>
              <input id="comment-button" type="submit" value="Add Comment" />
            </form>
        </div>


        <div className="thread-comments">
          <div className="comment">
            <div className="thread-comment-meta">
              <span className="thread-comment-owner">coolboysumit</span>|&nbsp;
              <span className="thread-comment-date">2 mins ago</span> &nbsp;
            </div>
            <div className="thread-comment">
              this is a comment from a very cool boy Sumit.
              What this post is lamenting is the loss of some actor like MECC. We had great software written for students (not adults) at one point. Many of us here have used it and fondly remember it. Titles like Oregon Trail, Reader Rabbit, etc...
            </div>
          </div>


          <div className="comment">
            <div className="thread-comment-meta">
              <span className="thread-comment-owner">beautifulEsha</span>|&nbsp;
              <span className="thread-comment-date">8 mins ago</span> &nbsp;
            </div>
            <div className="thread-comment">
              Ive told this story before: Back when I was in college, I had a summer internship at a place that was a service center for the K-12 schools in a large county. Microcomputers were the big new thing. We had a facility with one of each kind of computer (Commodore, Apple, Radio Shack, etc.) and all the software we could lay their hands on. Teachers could come in and try things out.
            </div>
          </div>

          <div className="comment">
            <div className="thread-comment-meta">
              <span className="thread-comment-owner">coolboysumit</span>|&nbsp;
              <span className="thread-comment-date">2 mins ago</span> &nbsp;
            </div>
            <div className="thread-comment">
              this is a comment from a very cool boy Sumit.
              What this post is lamenting is the loss of some actor like MECC. We had great software written for students (not adults) at one point. Many of us here have used it and fondly remember it. Titles like Oregon Trail, Reader Rabbit, etc...
            </div>
          </div>
        </div>


      </div>
    );
  }
}

ThreadDetail.propTypes = {
};
