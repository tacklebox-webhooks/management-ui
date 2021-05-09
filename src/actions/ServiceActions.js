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

// export function fetchService(id) {
//   return function (dispatch) {
//     apiClient.getService(id, (data) =>
//       dispatch(fetchServiceSuccess(data.message))
//     );
//   };
// }

// export function createMessage(board, callback) {
//   return function (dispatch) {
//     apiClient.createMessage(board, (data) => {
//       dispatch(createMessageSuccess(data.board));

//       if (callback) {
//         callback(data.board);
//       }
//     });
//   };
// }
