import * as types from "../constants/ActionTypes";

const eventTypes = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_EVENT_TYPES_SUCCESS:
      return action.eventTypes;
    default:
      return state;
  }
};

export default eventTypes;
