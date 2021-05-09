import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchEventTypesSuccess(eventTypesList, serviceId) {
  const eventTypes = {};
  eventTypes.id = serviceId;
  eventTypes.list = eventTypesList;
  return { type: types.FETCH_EVENT_TYPES_SUCCESS, eventTypes };
}

export function fetchEventTypes(serviceId) {
  return function (dispatch, getState) {
    const state = getState();

    if (state.eventTypes.hasOwnProperty(serviceId)) {
      return;
    }

    apiClient.getEventTypes(serviceId, (eventTypes) =>
      dispatch(fetchEventTypesSuccess(eventTypes, serviceId))
    );
  };
}
