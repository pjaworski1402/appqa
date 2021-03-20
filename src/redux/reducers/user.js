const defaultState = {
  isLogged: false,
  username: "",
  email: "",
  balance: 0,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
