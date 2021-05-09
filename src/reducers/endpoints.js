import * as types from "../constants/ActionTypes";

const endpoints = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ENDPOINTS_SUCCESS:
      const newState = { ...state };
      newState[action.endpoints.id] = action.endpoints.list;
      return newState;
    default:
      return state;
  }
};

export default endpoints;
