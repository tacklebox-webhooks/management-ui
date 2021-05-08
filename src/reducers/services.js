import * as types from "../constants/ActionTypes";

const services = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_SERVICES_SUCCESS:
      return action.services;
    default:
      return state;
  }
};

export default services;
