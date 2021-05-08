import * as types from "../constants/ActionTypes";

const users = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
};

export default users;
