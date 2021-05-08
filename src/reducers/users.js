const users = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REQUESTS_SUCCESS":
      return action.users;
    default:
      return state;
  }
};

export default users;
