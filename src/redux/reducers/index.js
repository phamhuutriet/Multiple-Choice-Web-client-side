import deckReducer from "./deckReducer";
import { combineReducers } from "redux";

export default combineReducers({
  deck: deckReducer,
});
