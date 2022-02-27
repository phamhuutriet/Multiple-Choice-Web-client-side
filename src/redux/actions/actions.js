import * as api from "../../api/index";
import {
  ADD_QUESTION,
  CREATE_NEW_DECK,
  FETCH_ALL_DECKS,
  UPDATE_PRIORITY_SCORE,
} from "./actionTypes";

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
      const { data } = await api.updatePriorityScore(updatedQuestion);
      dispatch({
        type: UPDATE_PRIORITY_SCORE,
        payloads: { data: data, deckId: deckId },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

export const createNewDeck = (newDeck) => async (dispatch) => {
  try {
    const { data } = await api.createNewDeck(newDeck);
    dispatch({ type: CREATE_NEW_DECK, payloads: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const addQuestionToDeck = (newQuestion, deckId) => async (dispatch) => {
  try {
    console.log("before api");
    const { data } = await api.addQuestionToDeck(newQuestion, deckId);
    dispatch({ type: ADD_QUESTION, payloads: data, deckId: deckId });
    console.log("after api");
  } catch (err) {
    console.log(err.message);
  }
};
