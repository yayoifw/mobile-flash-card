import {combineReducers} from 'redux'
import decks from './decksReducer'
import cards from './cardsReducer'

export default combineReducers({
  decks,
  cards
})