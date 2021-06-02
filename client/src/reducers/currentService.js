import * as types from '../constants/ActionTypes';

const currentService = (state = { name: '' }, action) => {
  switch (action.type) {
    case types.FETCH_SERVICES_SUCCESS:
      if (action.services.length > 0 && state.name === '') {
        if (localStorage.getItem('currentService')) {
          return JSON.parse(localStorage.getItem('currentService'));
        }

        return action.services[0];
      } else {
        return state;
      }
    case types.SET_CURRENT_SERVICE_SUCCESS:
      return action.currentService;
    default:
      return state;
  }
};

export default currentService;
