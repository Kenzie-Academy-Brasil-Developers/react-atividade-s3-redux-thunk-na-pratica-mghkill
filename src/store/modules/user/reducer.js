import { ADD_COMMENT } from "./actionsType";

const initialState = { name: "Kenzie", comment: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updatedUser;
    default:
      return state;
  }
};
export default userReducer;
