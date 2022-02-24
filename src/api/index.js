import axios from "axios";

const DECKS_URL = "http://localhost:8080/decks";
const QUESTIONS_URL = "http://localhost:8080/questions";

export const fetchAllDeck = () => axios.get(DECKS_URL);
export const updatePriorityScore = (updatedQuestion) =>
  axios.patch(QUESTIONS_URL + `/${updatedQuestion.id}`, updatedQuestion);
