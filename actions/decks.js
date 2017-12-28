import {DECK_ADD, DECK_DELETE, DECK_LIST_LOADED} from './index'

/**
 *  Deck: {
    title: 'string',
    questions: []
  }
 */

export const decksLoadedAction = (decks) => ({
  type: DECK_LIST_LOADED,
  payload: decks
})

export const addDeckAction = (data) => ({
  type: DECK_ADD,
  payload: data
})

const deleteDeckAction = (data) => ({
  type: DECK_DELETE,
  data
})
