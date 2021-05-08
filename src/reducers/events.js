const events = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.events;
    default:
      return state;
  }
};

export default events;
