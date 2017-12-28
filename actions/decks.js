import {DECK_ADD, DECK_DELETE, DECK_EDIT, DECK_LIST_LOADED} from './index'

/**
 *  Deck: {
    key: number,
    name: 'string',
    cards: [1,2,3]
  }

 * @param postId
 * @param voteType
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

const editDeckAction = (data) => ({
  type: DECK_EDIT,
  data
})