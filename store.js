import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import {logger} from 'redux-logger'

// const initialState = {
//   decks: [
//     {
//       id: 'a',
//       name: 'udacicard',
//       cards: ['1','2','3']
//     },
//     {
//       id: 'b',
//       name: 'Redux',
//       cards: ['1','2','3']
//     },
//     {
//       id: 'c',
//       name: 'react',
//       cards: []
//     }
//   ],
//   cards: [
//     {
//       id: '1',
//       parentId: 'b',
//       question: 'The state of your whole application is stored in an object tree within a single store.',
//       answer: 'Correct. Store is the single source of truth.',
//       isCorrectAnswer: true
//     },
//     {
//       id: '2',
//       parentId: 'b',
//       question: 'The only way to change the state is to emit an action, an object describing what happened.',
//       answer: 'Correct. State is read only.',
//       isCorrectAnswer: true
//     },
//     {
//       id: '3',
//       parentId: 'b',
//       question: 'To specify how the state tree is transformed by actions, you write functional component.',
//       answer: 'Incorrect. You write pure reducers.',
//       isCorrectAnswer: false
//     },
//   ]
// }

// const initialData = {
//   "decks": [{
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   }, {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }]
// }

const initialData = {
  "decks": []
}

const store = createStore(reducer, initialData, applyMiddleware(logger))

export default store