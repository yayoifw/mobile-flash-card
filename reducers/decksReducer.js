import {
  DECK_LIST_FETCH,
  DECK_ADD,
  DECK_DELETE,
  DECK_EDIT
} from './../actions'

function decks(state = [], action) {
  switch (action.type) {
    case DECK_LIST_FETCH:
      return state

    case DECK_ADD:
      return [...state, action.payload]

    case DECK_DELETE:
      return state.filter(item => item.id !== action.payload.id);

    case DECK_EDIT:
      return state.map(item => ((item.id === action.payload.id) ? action.payload : item))

    default:
  }
  return state;
}

export default decks