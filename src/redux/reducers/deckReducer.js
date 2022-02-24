import { FETCH_ALL_DECKS, UPDATE_PRIORITY_SCORE } from "../actions/actionTypes";

export default (decks = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DECKS:
      return action.payloads;
    case UPDATE_PRIORITY_SCORE:
      let updatedDeck = decks.find((deck) => deck.id == action.payloads.deckId);
      updatedDeck.questions.map((question) =>
        question.id == action.payloads.data.id ? action.payloads.data : question
      );
      return decks.map((deck) =>
        deck.id == updatedDeck.id ? updatedDeck : deck
      );
    default:
      return decks;
  }
};
