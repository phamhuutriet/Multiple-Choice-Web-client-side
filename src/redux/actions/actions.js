import * as api from "../../api/index";
import { FETCH_ALL_DECKS, UPDATE_PRIORITY_SCORE } from "./actionTypes";

export const fetchAllDeck = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllDeck();
    dispatch({ type: FETCH_ALL_DECKS, payloads: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePriorityScore =
  (updatedQuestion, deckId) => async (dispatch) => {
    try {
      console.log("updatedQuestion: ", updatedQuestion);
      const { data } = await api.updatePriorityScore(updatedQuestion);
      console.log(data);
      dispatch({
        type: UPDATE_PRIORITY_SCORE,
        payloads: { data: data, deckId: deckId },
      });
    } catch (err) {
      console.log(err.message);
    }
  };
