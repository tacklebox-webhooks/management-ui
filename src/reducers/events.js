import * as types from "../constants/ActionTypes";

const events = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
      const newState = { ...state };
      newState[action.events.id] = action.events.list;
      return newState;
    default:
      return state;
  }
};

export default events;
