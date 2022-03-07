import axios from "axios";

const DECKS_URL = "http://localhost:8080/decks";
const QUESTIONS_URL = "http://localhost:8080/questions";
const USER_URL = "http://localhost:8080/user";
const AUTH_URL = "http://localhost:8080/authenticate";

const createHeader = (jwt) => ({
  headers: {
    Authorization: "Bearer " + jwt,
  },
});

export const signUp = (signUpInfo) => axios.post(AUTH_URL + "/register", signUpInfo);

export const fetchAllDeck = (jwt, userId) => axios.get(USER_URL + `/${userId}/decks`, createHeader(jwt));

export const authenticate = (loginInfo) => axios.post(AUTH_URL, loginInfo);

export const updatePriorityScore = (jwt, updatedQuestion) =>
  axios.patch(QUESTIONS_URL + `/${updatedQuestion.id}/?setPriority=true`, updatedQuestion, createHeader(jwt));

export const createNewDeck = (jwt, userId, deck) => axios.post(USER_URL + `/${userId}/decks`, deck, createHeader(jwt));

export const addQuestionToDeck = (jwt, newQuestion, deckId) => axios.post(DECKS_URL + `/${deckId}/questions`, newQuestion, createHeader(jwt));

export const fetchDeckQuestionById = (jwt, deckId, shuffleQuestions, shuffleChoices, sortByPriority) =>
  axios.get(
    DECKS_URL + `/${deckId}/questions/?shuffleQuestion=${shuffleQuestions}&shuffleChoice=${shuffleChoices}&sortByPriority=${sortByPriority}`,
    createHeader(jwt)
  );

export const fetchQuestionById = (jwt, questionId) => axios.get(QUESTIONS_URL + `/${questionId}`, createHeader(jwt));

export const updateQuestionById = (jwt, questionId, updatedQuestion) =>
  axios.patch(QUESTIONS_URL + `/${questionId}`, updatedQuestion, createHeader(jwt));

export const deleteQuestionById = (jwt, questionId) => axios.delete(QUESTIONS_URL + `/${questionId}`, createHeader(jwt));

export const deleteDeckById = (jwt, deckId) => axios.delete(DECKS_URL + `/${deckId}`, createHeader(jwt));
