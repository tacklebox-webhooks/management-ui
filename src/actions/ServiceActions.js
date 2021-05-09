import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchServicesSuccess(services) {
  return { type: types.FETCH_SERVICES_SUCCESS, services };
}

export function setService(currentService) {
  return { type: types.SET_CURRENT_SERVICE_SUCCESS, currentService };
}

export function fetchServices() {
  return function (dispatch) {
    apiClient.getServices((services) =>
      dispatch(fetchServicesSuccess(services))
    );
  };
}
