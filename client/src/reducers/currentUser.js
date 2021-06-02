import * as types from '../constants/ActionTypes';

const currentUser = (state = { name: '' }, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      if (action.users.list.length > 0) {
        if (localStorage.getItem('currentUser')) {
          return JSON.parse(localStorage.getItem('currentUser'));
        }

        return action.users.list[0];
      } else {
        return {};
      }
    case types.SET_CURRENT_USER_SUCCESS:
      return action.currentUser;
    default:
      return state;
  }
};

export default currentUser;
