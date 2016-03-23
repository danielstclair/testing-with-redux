import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {
  saveComment: PropTypes.func
};

class CommentBox extends Component {
  constructor() {
    super();
    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ comment: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

CommentBox.propTypes = propTypes;

export default connect(null, actions)(CommentBox);
