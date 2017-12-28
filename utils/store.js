import {createStore,applyMiddleware} from 'redux'
import reducer from '../reducers/index'
import {logger} from 'redux-logger'

const initialData = {
  "decks": []
}

const store = createStore(reducer, initialData, applyMiddleware(logger))

export default store