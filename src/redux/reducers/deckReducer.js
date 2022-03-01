import {
  FETCH_ALL_DECKS,
  UPDATE_DECK_REDUX,
  UPDATE_PRIORITY_SCORE,
  CREATE_NEW_DECK,
  ADD_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  DELETE_DECK,
  FETCH_DECK_QUESTION,
} from "../actions/actionTypes";

export default (decks = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DECKS:
      return action.payloads;
    case UPDATE_PRIORITY_SCORE:
      var updatedDeck = decks.find((deck) => deck.id == action.payloads.deckId);
      updatedDeck.questions.map((question) => (question.id == action.payloads.data.id ? action.payloads.data : question));
      return decks.map((deck) => (deck.id == updatedDeck.id ? updatedDeck : deck));
    case UPDATE_DECK_REDUX:
      var deckId = action.payloads.deckId;
      var updatedDeck = action.payloads.deck;
      return decks.map((deck) => (deck.id == deckId ? updatedDeck : deck));
    case CREATE_NEW_DECK:
      return [...decks, action.payloads];
    case ADD_QUESTION:
      var updatedDeck = decks.find((deck) => deck.id == action.deckId);
      updatedDeck.questions = [...updatedDeck.questions, action.payloads];
      return decks.map((deck) => (deck.id == updatedDeck.id ? updatedDeck : deck));
    case UPDATE_QUESTION:
      var updatedDeck = decks.find((deck) => deck.id == action.deckId);
      updatedDeck.questions = updatedDeck.questions.map((question) => (question.id == action.id ? action.payloads : question));
      return decks.map((deck) => (deck.id == action.deckId ? updatedDeck : deck));
    case DELETE_QUESTION:
      var updatedDeck = decks.find((deck) => deck.id == action.deckId);
      updatedDeck.questions = updatedDeck.questions.filter((question) => question.id != action.questionId);
      console.log("delete in reducer: ", updatedDeck.questions);
      return decks.map((deck) => (deck.id == action.deckId ? updatedDeck : deck));
    case DELETE_DECK:
      return decks.filter((deck) => deck.id != action.deckId);
    case FETCH_DECK_QUESTION:
      var fetchedDeck = decks.find((deck) => deck.id == action.deckId);
      fetchedDeck.questions = action.payloads;
      return decks.map((deck) => (deck.id == action.deckId ? fetchedDeck : deck));
    default:
      return decks;
  }
};
