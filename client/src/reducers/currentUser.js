import * as types from '../constants/ActionTypes';

const currentUser = (state = { name: '' }, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      const users = action.users.list;
      if (users.length > 0) {
        if (localStorage.getItem('currentUser')) {
          return JSON.parse(localStorage.getItem('currentUser'));
        } else {
          console.log('Right here');
          localStorage.setItem('currentUser', JSON.stringify(users[0]));
        }

        return users[0];
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
