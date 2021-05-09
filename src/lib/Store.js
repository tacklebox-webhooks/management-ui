import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";
// import services from "../reducers/services";
// import users from "../reducers/users";
// import eventTypes from "../reducers/eventTypes";
// import endpoints from "../reducers/endpoints";
// import events from "../reducers/events";
// import messages from "../reducers/messages";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = configureStore({
//   reducer: {
//     services,
//     users,
//     eventTypes,
//     endpoints,
//     events,
//     messages,
//   },
// });

export default store;
