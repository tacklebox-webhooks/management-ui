import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchEndpointsSuccess(endpointList, userId) {
  const endpoints = {};
  endpoints.id = userId;
  endpoints.list = endpointList;
  return { type: types.FETCH_ENDPOINTS_SUCCESS, endpoints };
}

// serviceId and userId can be passed in by selecting currentUser and currentService
export function fetchEndpoints(serviceId, userId) {
  return function (dispatch, getState) {
    const state = getState();

    if (state.endpoints.hasOwnProperty(userId)) {
      console.log(
        "No need to fetch, endpoints for given userId already exists"
      );
      return; // Not sure if I have to dispatch instead of return
    }
    console.log("Fetching endpoints");
    apiClient.getEndpoints(serviceId, userId, (endpoints) =>
      dispatch(fetchEndpointsSuccess(endpoints, userId))
    );
  };
}
