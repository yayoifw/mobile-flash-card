import {CARD_ADD, CARD_EDIT, CARD_DELETE} from "./index"

/**
 * CARD = {
 *   id: 123,
 *   question: 'question',
 *   answer: 'answer',
 *   parentId: 456
 * }
 **/

export const addCard = (card) => dispatch => {
  dispatch(addCard(card))
}

const addCardAction = (data) => ({
  type: CARD_ADD,
  payload: data
})

const deleteDeckAction = (data) => ({
  type: CARD_DELETE,
  payload: data
})

const editCardAction = (data) => ({
  type: CARD_EDIT,
  payload: data
})