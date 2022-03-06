import deckReducer from "./deckReducer";
import { combineReducers } from "redux";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({
  deck: deckReducer,
  userInfo: userInfoReducer,
});
