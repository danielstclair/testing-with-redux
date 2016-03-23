import { expect } from '../test_helper';
import commentReducer from '../../src/scripts/reducers/comments';
import { SAVE_COMMENT } from '../../src/scripts/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.be.instanceof(Array);
  });
  it('handles action type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'New Comment'};
    expect(commentReducer([], action)).to.eql(['New Comment']);
  });
});
