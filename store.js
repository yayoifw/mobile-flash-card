import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import {logger} from 'redux-logger'

const initialState = {
  decks: [
    {
      key: 'a',
      name: 'udacicard',
      cards: [1,2,3]
    },
    {
      key: 'b',
      name: 'redux',
      cards: [4,5,6,7,8,9]
    },
    {
      key: 'c',
      name: 'react',
      cards: []
    }
  ]
}

const store = createStore(reducer, initialState, applyMiddleware(logger))

export default store