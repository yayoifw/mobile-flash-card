import {DECK_ADD, DECK_DELETE, DECK_EDIT} from './index'

export const votePost = (postId, voteType) => dispatch => {
  api.votePost(postId, voteType).then(data => {
    dispatch(votePostAction(data))
  })
}

export const addDeck = (title) => dispatch => {
  dispatch(addDeckAction())
}

const addDeckAction = (data) => ({
  type: DECK_ADD,
  data
})

const deleteDeckAction = (data) => ({
  type: DECK_DELETE,
  data
})

const editDeckAction = (data) => ({
  type: DECK_EDIT,
  data
})