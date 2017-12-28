import {
  DECK_LIST_LOADED,
  DECK_ADD,
  DECK_DELETE,
  CARD_ADD
} from './../actions'

function decks(state = [], action) {
  switch (action.type) {
    case CARD_ADD:
    {
      const {card, parentId} = action.payload
      return state.map(deck => {
        if (deck.title === parentId) {
          // found a parent deck
          deck.questions.push(card)
        }
        return deck
      })
    }
    break;

    case DECK_LIST_LOADED:
      return action.payload

    case DECK_ADD:
      return [...state, action.payload]

    case DECK_DELETE:
      return state.filter(item => item.title !== action.payload.title);

    default:
  }
  return state;
}

export default decks