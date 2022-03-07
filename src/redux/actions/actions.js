import * as api from "../../api/index";
import {
  ADD_QUESTION,
  AUTHENTICATE,
  CREATE_NEW_DECK,
  DELETE_DECK,
  DELETE_QUESTION,
  FETCH_ALL_DECKS,
  FETCH_DECK_QUESTION,
  LOG_OUT,
  UPDATE_PRIORITY_SCORE,
  UPDATE_QUESTION,
  UPDATE_REDUX,
} from "./actionTypes";

export const fetchAllDeck = (jwt, userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchAllDeck(jwt, userId);
    dispatch({ type: FETCH_ALL_DECKS, payloads: data });
  } catch (err) {
    console.log(err.message);
    if (err.response.status == 403) {
      dispatch({ type: LOG_OUT });
    }
  }
};

export const updatePriorityScore = (jwt, updatedQuestion, deckId) => async (dispatch) => {
  try {
    const { data } = await api.updatePriorityScore(jwt, updatedQuestion);
    console.log("update to server data ", data);
    dispatch({ type: UPDATE_PRIORITY_SCORE, payloads: data, id: data.id, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const createNewDeck = (jwt, userId, newDeck) => async (dispatch) => {
  try {
    const { data } = await api.createNewDeck(jwt, userId, newDeck);
    dispatch({ type: CREATE_NEW_DECK, payloads: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const addQuestionToDeck = (jwt, newQuestion, deckId) => async (dispatch) => {
  try {
    const { data } = await api.addQuestionToDeck(jwt, newQuestion, deckId);
    dispatch({ type: ADD_QUESTION, payloads: data, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateQuestion = (jwt, updatedQuestion, questionId, deckId) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestionById(jwt, questionId, updatedQuestion);
    dispatch({ type: UPDATE_QUESTION, payloads: data, id: questionId, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteQuestion = (jwt, questionId, deckId) => async (dispatch) => {
  try {
    await api.deleteQuestionById(jwt, questionId);
    dispatch({ type: DELETE_QUESTION, questionId: questionId, deckId: deckId });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteDeck = (jwt, deckId) => async (dispatch) => {
  try {
    await api.deleteDeckById(jwt, deckId);
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

export const authenticate = (logginInfo) => async (dispatch) => {
  try {
    const { data } = await api.authenticate(logginInfo);
    console.log(data);
    dispatch({ type: AUTHENTICATE, payloads: { jwt: data.jwt, userId: data.userId } });
  } catch (err) {
    console.log(err.message);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOG_OUT });
};

export const updateQuestionToRedux = (updatedQuestion, questionId, deckId) => async (dispatch) => {
  console.log("dispatch update question to redux", updatedQuestion);
  dispatch({ type: UPDATE_QUESTION, payloads: updatedQuestion, id: questionId, deckId: deckId });
};
