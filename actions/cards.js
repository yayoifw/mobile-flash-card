import {CARD_ADD, CARD_DELETE} from "./index"

/**
 * CARD = {
 *   question: 'question',
 *   answer: 'answer',
 *   parentId: "parent title"
 * }
 **/


export const addCardAction = (card, parentId) => ({
  type: CARD_ADD,
  payload: { card, parentId }
})

const deleteCardAction = (data) => ({
  type: CARD_DELETE,
  payload: data
})
