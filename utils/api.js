import {AsyncStorage} from 'react-native'

const UDACICARD_KEY = 'UDACICARD_KEY'

const initialData = {
  "React": {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  "JavaScript": {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function initDatabase() {
  AsyncStorage.setItem(UDACICARD_KEY, JSON.stringify(initialData))
}

function decksObjToArrayList(decksObj) {
  return Object.values(decksObj)
}

// returns all of the decks along with their titles, questions, and answers.
export function getDecksAsArrayList() {
  return AsyncStorage.getItem(UDACICARD_KEY).then((data) => {
    return decksObjToArrayList(JSON.parse(data))})
}

// returns all of the decks along with their titles, questions, and answers.
export function getDecks() {
  return AsyncStorage.getItem(UDACICARD_KEY).then(JSON.parse)
}

// take in a single id argument and return the deck associated with that id.
export function getDeck(id) {
  const decks = getDecks().then(decks => {
    return decks[id]
  })
}

// take in a single title argument and add it to the decks.
export function saveDeckTitle(title) {
  getDecks().then(decks => {
    if (decks[title] === undefined) {
      // Add it only when it does not already exists
      decks[title] = {
        title,
        questions: []
      }
      AsyncStorage.setItem(UDACICARD_KEY, JSON.stringify(decks))
    }
  })
}

// take in two arguments, title and card, and will add the card to the list of questions for the deck
export function addcardToDeck(title, card) {
  getDecks().then(decks => {
    if (decks[title] !== undefined) {
      decks[title].questions.push(card)
      AsyncStorage.setItem(UDACICARD_KEY, JSON.stringify(decks))
    }
  })
}