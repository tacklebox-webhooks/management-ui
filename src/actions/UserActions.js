import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

// Old (users as array)
export function fetchUsersSuccess(users) {
  return { type: types.FETCH_USERS_SUCCESS, users };
}

export function setUser(currentUser) {
  return { type: types.SET_CURRENT_USER_SUCCESS, currentUser };
}

export function fetchUsers(serviceId) {
  return function (dispatch) {
    apiClient.getUsers(serviceId, (users) =>
      dispatch(fetchUsersSuccess(users))
    );
  };
}

// New (users as object)
// export function fetchUsersSuccess(userList, serviceId) {
//   const users = {};
//   users.id = serviceId;
//   users.list = userList;
//   return { type: types.FETCH_USERS_SUCCESS, users };
// }

// export function setUser(currentUser) {
//   return { type: types.SET_CURRENT_USER_SUCCESS, currentUser };
// }

// export function fetchUsers(serviceId) {
//   return function (dispatch, getState) {
//     const state = getState();
//     console.log("State within fetchUsers: ");
//     console.log(state);
//     apiClient.getUsers(serviceId, (users) =>
//       dispatch(fetchUsersSuccess(users, serviceId))
//     );
//   };
// }

// export function fetchService(id) {
//   return function (dispatch) {
//     apiClient.getService(id, (data) =>
//       dispatch(fetchServiceSuccess(data.message))
//     );
//   };
// }

// export function createMessage(board, callback) {
//   return function (dispatch) {
//     apiClient.createMessage(board, (data) => {
//       dispatch(createMessageSuccess(data.board));

//       if (callback) {
//         callback(data.board);
//       }
//     });
//   };
// }
