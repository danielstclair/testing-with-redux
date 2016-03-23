import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default function() {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
}
