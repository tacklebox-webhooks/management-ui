import * as types from "../constants/ActionTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      const newState = { ...state };
      newState[action.users.id] = action.users.list;
      return newState;
    default:
      return state;
  }
};

export default users;
