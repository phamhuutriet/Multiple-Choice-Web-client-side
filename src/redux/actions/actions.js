import * as api from "../../api/index";
import {
  ADD_QUESTION,
  CREATE_NEW_DECK,
  DELETE_DECK,
  DELETE_QUESTION,
  FETCH_ALL_DECKS,
  FETCH_DECK_QUESTION,
  UPDATE_PRIORITY_SCORE,
  UPDATE_QUESTION,
} from "./actionTypes";

export const fetchAllDeck = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllDeck();
    dispatch({ type: FETCH_ALL_DECKS, payloads: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePriorityScore = (updatedQuestion, deckId) => async (dispatch) => {
  try {
    const { data } = await api.updatePriorityScore(updatedQuestion);
    dispatch({ type: UPDATE_PRIORITY_SCORE, payloads: data, id: data.id, deckId: deckId });
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
    const { data } = await api.addQuestionToDeck(newQuestion, deckId);
    dispatch({ type: ADD_QUESTION, payloads: data, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateQuestion = (updatedQuestion, questionId, deckId) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestionById(questionId, updatedQuestion);
    dispatch({ type: UPDATE_QUESTION, payloads: data, id: questionId, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteQuestion = (questionId, deckId) => async (dispatch) => {
  try {
    await api.deleteQuestionById(questionId);
    dispatch({ type: DELETE_QUESTION, questionId: questionId, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteDeck = (deckId) => async (dispatch) => {
  try {
    await api.deleteDeckById(deckId);
    dispatch({ type: DELETE_DECK, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchDeckQuestionById = (deckId) => async (dispatch) => {
  try {
    const { data } = await api.fetchDeckQuestionById(deckId);
    dispatch({ type: FETCH_DECK_QUESTION, payloads: data, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};
