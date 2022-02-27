import axios from "axios";

const DECKS_URL = "http://localhost:8080/decks";
const QUESTIONS_URL = "http://localhost:8080/questions";

export const fetchAllDeck = () => axios.get(DECKS_URL);
export const updatePriorityScore = (updatedQuestion) =>
  axios.patch(QUESTIONS_URL + `/${updatedQuestion.id}`, updatedQuestion);
export const createNewDeck = (deck) => axios.post(DECKS_URL, deck);
export const addQuestionToDeck = (newQuestion, deckId) =>
  axios.post(DECKS_URL + `/${deckId}/questions`, newQuestion);
export const fetchDeckQuestionById = (deckId, shuffleQuestion, shuffleChoice) =>
  axios.get(
    DECKS_URL +
      `/${deckId}/questions/?shuffleQuestion=${shuffleQuestion}&shuffleChoice=${shuffleChoice}`
  );
