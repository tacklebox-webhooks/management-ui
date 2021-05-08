const services = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.services;
    default:
      return state;
  }
};

export default services;
