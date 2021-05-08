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
