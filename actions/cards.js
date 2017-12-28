import {CARD_FETCH, CARD_ADD, CARD_EDIT, CARD_DELETE} from "./index"

/**
 * CARD = {
 *   question: 'question',
 *   answer: 'answer',
 *   parentId: "parent title"
 * }
 **/

export const fetchCard = (id) => ({
  type: CARD_FETCH,
  id
})

export const addCardAction = (card, parentId) => ({
  type: CARD_ADD,
  payload: { card, parentId }
})

const deleteCardAction = (data) => ({
  type: CARD_DELETE,
  payload: data
})

const editCardAction = (data) => ({
  type: CARD_EDIT,
  payload: data
})