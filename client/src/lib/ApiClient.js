import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

// axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_API_KEY;

const apiClient = {
  getServices: function (callback) {
    return axios
      .get(routes.BASE_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getUsers: function (serviceId, callback) {
    return axios
      .get(`${routes.BASE_URL}/${serviceId}/users`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getEventTypes: function (serviceId, callback) {
    return axios
      .get(`${routes.BASE_URL}/${serviceId}/event_types`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getEndpoints: function (serviceId, userId, callback) {
    return axios
      .get(`${routes.BASE_URL}/${serviceId}/users/${userId}/subscriptions`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getEvents: function (serviceId, userId, callback) {
    return axios
      .get(`${routes.BASE_URL}/${serviceId}/users/${userId}/events`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getMessages: function (serviceId, userId, callback) {
    return axios
      .get(`${routes.BASE_URL}/${serviceId}/users/${userId}/messages`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;