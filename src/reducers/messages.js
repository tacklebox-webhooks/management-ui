const messages = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.messages;
    default:
      return state;
  }
};

export default messages;
