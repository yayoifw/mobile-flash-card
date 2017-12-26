import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import {logger} from 'redux-logger'

const initialState = {
  decks: [
    {
      id: 'a',
      name: 'udacicard',
      cards: [1,2,3]
    },
    {
      id: 'b',
      name: 'Redux',
      cards: [1,2,3]
    },
    {
      id: 'c',
      name: 'react',
      cards: []
    }
  ],
  cards: [
    {
      id: '1',
      parentId: 'b',
      question: 'The state of your whole application is stored in an object tree within a single store.',
      answer: 'Correct. Store is the single source of truth.'
    },
    {
      id: '2',
      parentId: 'b',
      question: 'The only way to change the state is to emit an action, an object describing what happened.',
      answer: 'Correct. State is read only.'
    },
    {
      id: '3',
      parentId: 'b',
      question: 'To specify how the state tree is transformed by actions, you write functional component.',
      answer: 'Incorrect. You write pure reducers.'
    },
  ]
}

const store = createStore(reducer, initialState, applyMiddleware(logger))

export default store