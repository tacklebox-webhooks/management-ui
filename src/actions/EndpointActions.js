import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchEndpointsSuccess(endpointList, userId) {
  const endpoints = {};
  endpoints.id = userId;
  endpoints.list = endpointList;
  return { type: types.FETCH_ENDPOINTS_SUCCESS, endpoints };
}

export function fetchEndpoints(serviceId, userId) {
  return function (dispatch, getState) {
    const state = getState();

    if (state.endpoints.hasOwnProperty(userId)) {
      return;
    }

    apiClient.getEndpoints(serviceId, userId, (endpoints) =>
      dispatch(fetchEndpointsSuccess(endpoints, userId))
    );
  };
}
