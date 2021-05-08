const eventTypes = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.eventTypes;
    default:
      return state;
  }
};

export default eventTypes;
