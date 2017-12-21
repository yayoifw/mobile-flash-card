import {DECK_ADD, DECK_DELETE, DECK_EDIT, DECK_LIST_FETCH} from './index'

/**
 *  Deck: {
    key: number,
    name: 'string',
    cards: [1,2,3]
  }

 * @param postId
 * @param voteType
 */

export const fetchDeckAction = () => ({
  type: DECK_LIST_FETCH
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