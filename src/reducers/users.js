import * as types from "../constants/ActionTypes";

// Old
const users = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      console.log("action is");
      console.log(action.users);
      return action.users;
    default:
      return state;
  }
};

// New
// Change users from array to object
// Object keys are serviceIds
// Object values are arrays of users
// Default state: {}
// const users = (state = {}, action) => {
//   switch (action.type) {
//     case types.FETCH_USERS_SUCCESS:
//       const newState = { ...state };
//       newState[action.users.id] = action.users.list;
//       return newState;
//     default:
//       return state;
//   }
// };

export default users;
