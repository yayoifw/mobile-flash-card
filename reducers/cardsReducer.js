import {CARD_ADD, CARD_DELETE, CARD_EDIT} from "../actions/index";

function cards(state = [], action) {
  switch (action.type) {
    case CARD_ADD:
      return [...state, action.payload];

    case CARD_DELETE:
      return state.filter(item => item.id !== action.payload.id);

    case CARD_EDIT:
      return state.map(item => ((item.id === action.payload.id) ? action.payload : item))

    default:
  }
  return state
}

export default cards