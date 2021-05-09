import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

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
  return function (dispatch, getState) {
    const state = getState();

    if (state.users.hasOwnProperty(serviceId)) {
      dispatch(setUser(state.users[serviceId][0]));
      return;
    }

    apiClient.getUsers(serviceId, (users) =>
      dispatch(fetchUsersSuccess(users, serviceId))
    );
  };
}
