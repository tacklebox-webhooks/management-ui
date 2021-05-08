import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchUsersSuccess(users) {
  return { type: types.FETCH_USERS_SUCCESS, users };
}

export function fetchUsers(serviceId) {
  return function (dispatch) {
    apiClient.getUsers(serviceId, (users) =>
      dispatch(fetchUsersSuccess(users))
    );
  };
}
