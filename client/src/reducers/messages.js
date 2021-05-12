import * as types from "../constants/ActionTypes";

const messages = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCESS:
      const newState = { ...state };
      newState[action.messages.id] = action.messages.list;
      return newState;
    default:
      return state;
  }
};

export default messages;
