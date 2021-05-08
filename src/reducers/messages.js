import * as types from "../constants/ActionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      return action.messages;
    default:
      return state;
  }
};

export default messages;
