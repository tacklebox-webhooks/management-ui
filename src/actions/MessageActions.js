import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchMessagesRequest() {
  return { type: types.FETCH_MESSAGES_REQUEST };
}

export function fetchMessagesSuccess(messages) {
  return { type: types.FETCH_MESSAGES_SUCCESS, messages };
}

// export function fetchMessageSuccess(message) {
//   return { type: types.FETCH_MESSAGE_SUCCESS, message };
// }

// export function createMessageSuccess(board) {
//   return { type: types.CREATE_MESSAGE_SUCCESS, board };
// }

export function fetchMessages(serviceId, userId) {
  return function (dispatch) {
    dispatch(fetchMessagesRequest());
    apiClient.getMessages(serviceId, userId, (messages) =>
      dispatch(fetchMessagesSuccess(messages))
    );
  };
}

// export function fetchMessage(id) {
//   return function (dispatch) {
//     apiClient.getMessage(id, (data) =>
//       dispatch(fetchMessageSuccess(data.message))
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
