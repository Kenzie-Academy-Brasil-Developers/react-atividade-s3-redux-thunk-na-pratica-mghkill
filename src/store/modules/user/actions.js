import { ADD_COMMENT } from "./actionsType";

export const addComment = (updatedUser) => ({
  type: ADD_COMMENT,
  updatedUser,
});
