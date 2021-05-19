import { combineReducers } from "redux";
import services from "./services";
import currentService from "./currentService";
import users from "./users";
import currentUser from "./currentUser";
import eventTypes from "./eventTypes";
import endpoints from "./endpoints";
import events from "./events";
import messages from "./messages";
import stats from "./stats";

const rootReducer = combineReducers({
  services,
  users,
  eventTypes,
  endpoints,
  events,
  messages,
  currentService,
  currentUser,
  stats,
});

export default rootReducer;
