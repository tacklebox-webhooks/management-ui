import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchStatsSuccess(statList, serviceId) {
  const stats = {};
  stats.id = serviceId;
  stats.list = statList;
  return { type: types.FETCH_STATS_SUCCESS, stats };
}

export function fetchStats(serviceId) {
  return function (dispatch) {
    apiClient.getStats(serviceId, (stats) =>
      dispatch(fetchStatsSuccess(stats, serviceId))
    );
  };
}
