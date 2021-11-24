import { addComment } from "./actions";

const addCommentThunk = (comment) => {
  return (dispatch, getState) => {
    const { user } = getState();

    const updatedUser = { ...user, comment: [...user.comment, comment] };

    dispatch(addComment(updatedUser));
  };
};
export default addCommentThunk;
