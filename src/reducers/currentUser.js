import * as types from "../constants/ActionTypes";

const currentUser = (state = { name: "" }, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      if (action.users.length > 0) {
        return action.users[0];
      } else {
        return state;
      }
    case types.SET_CURRENT_USER_SUCCESS:
      return action.currentUser;
    default:
      return state;
  }
};

export default currentUser;
