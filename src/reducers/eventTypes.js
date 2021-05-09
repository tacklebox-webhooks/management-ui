import * as types from "../constants/ActionTypes";

// Old
// const eventTypes = (state = [], action) => {
//   switch (action.type) {
//     case types.FETCH_EVENT_TYPES_SUCCESS:
//       return action.eventTypes;
//     default:
//       return state;
//   }
// };

// New
const eventTypes = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_EVENT_TYPES_SUCCESS:
      const newState = { ...state };
      newState[action.eventTypes.id] = action.eventTypes.list;
      return newState;
    default:
      return state;
  }
};

export default eventTypes;
