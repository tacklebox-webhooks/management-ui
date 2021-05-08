import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchEventTypesSuccess(eventTypes) {
  return { type: types.FETCH_EVENT_TYPES_SUCCESS, eventTypes };
}

export function fetchEventTypes(serviceId) {
  return function (dispatch) {
    apiClient.getEventTypes(serviceId, (eventTypes) =>
      dispatch(fetchEventTypesSuccess(eventTypes))
    );
  };
}
