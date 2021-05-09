import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

// Old
// export function fetchEventTypesSuccess(eventTypes) {
//   return { type: types.FETCH_EVENT_TYPES_SUCCESS, eventTypes };
// }

// export function fetchEventTypes(serviceId) {
//   return function (dispatch) {
//     apiClient.getEventTypes(serviceId, (eventTypes) =>
//       dispatch(fetchEventTypesSuccess(eventTypes))
//     );
//   };
// }

// New
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
      console.log(
        "No need to fetch, eventTypes for given serviceId already exists"
      );
      return; // Not sure if I have to dispatch instead of return
    }

    apiClient.getEventTypes(serviceId, (eventTypes) =>
      dispatch(fetchEventTypesSuccess(eventTypes, serviceId))
    );
  };
}
