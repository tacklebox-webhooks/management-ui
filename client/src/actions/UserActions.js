import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchUsersSuccess(userList, serviceId) {
  const users = {};
  users.id = serviceId;
  users.list = userList;
  return { type: types.FETCH_USERS_SUCCESS, users };
}

export function setUser(currentUser) {
  return { type: types.SET_CURRENT_USER_SUCCESS, currentUser };
}

export function fetchUsers(serviceId) {
  return function (dispatch) {
    apiClient.getUsers(serviceId, (users) => {
      dispatch(fetchUsersSuccess(users, serviceId));
    });
  };
}
