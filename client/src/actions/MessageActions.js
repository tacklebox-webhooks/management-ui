import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

// export function fetchMessagesRequest() {
//   return { type: types.FETCH_MESSAGES_REQUEST };
// }

export function fetchMessagesSuccess(messageList, userId) {
  const messages = {};
  messages.id = userId;
  messages.list = messageList;
  return { type: types.FETCH_MESSAGES_SUCCESS, messages };
}

export function fetchMessages(serviceId, userId) {
  return function (dispatch, getState) {
    const state = getState();

    if (state.messages.hasOwnProperty(userId)) {
      return;
    }

    apiClient.getMessages(serviceId, userId, (messages) =>
      dispatch(fetchMessagesSuccess(messages, userId))
    );
  };
}
