import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchEventsSuccess(eventsList, userId) {
  const events = {};
  events.id = userId;
  events.list = eventsList;
  return { type: types.FETCH_EVENTS_SUCCESS, events };
}

export function fetchEvents(serviceId, userId) {
  return function (dispatch, getState) {
    const state = getState();

    if (state.events.hasOwnProperty(userId)) {
      console.log("No need to fetch, events for given userId already exists");
      return;
    }

    apiClient.getEvents(serviceId, userId, (events) =>
      dispatch(fetchEventsSuccess(events, userId))
    );
  };
}
