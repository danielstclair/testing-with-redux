import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map(comment => {
    return <li key={comment}>{comment}</li>;
  });
  return (
    <ul className="comment-list">
      {list}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
