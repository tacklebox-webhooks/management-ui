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
      console.log("No need to fetch, messages for given userId already exists");
      return; // Not sure if I have to dispatch instead of return
    }
    console.log("Fetching messages");

    apiClient.getMessages(serviceId, userId, (messages) =>
      dispatch(fetchMessagesSuccess(messages, userId))
    );
  };
}
