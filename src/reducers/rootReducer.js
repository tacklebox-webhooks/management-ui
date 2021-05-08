import { combineReducers } from "redux";
import services from "./services";
import users from "./users";
import eventTypes from "./eventTypes";
import endpoints from "./endpoints";
import events from "./events";
import messages from "./messages";

const rootReducer = combineReducers({
  services,
  users,
  eventTypes,
  endpoints,
  events,
  messages,
});

export default rootReducer;
