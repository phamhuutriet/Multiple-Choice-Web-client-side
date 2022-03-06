import { AUTHENTICATE, LOG_OUT } from "../actions/actionTypes";

export default (userInfo = null, action) => {
  console.log("dispatch user info", action.type);
  switch (action.type) {
    case AUTHENTICATE:
      return action.payloads;
    case LOG_OUT:
      return null;
    default:
      return userInfo;
  }
};
