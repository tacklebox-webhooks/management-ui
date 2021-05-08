const endpoints = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.endpoints;
    default:
      return state;
  }
};

export default endpoints;
