import * as types from "../constants/ActionTypes";

const stats = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_STATS_SUCCESS:
      const newState = { ...state };
      newState[action.stats.id] = action.stats.list;
      return newState;
    default:
      return state;
  }
};

export default stats;
