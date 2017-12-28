import React from 'react';
import store from './store'
import {Provider} from 'react-redux'
import {TabNavigator, StackNavigator} from 'react-navigation'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddQuiz from './components/AddQuiz'
import DeckList from './components/DeckList'
import DeckAdd from './components/DeckAdd'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

import {initDatabase, getDecks, getDeck, saveDeckTitle} from './utils/api'


const TabNav = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards-variant" size={32} color={tintColor} />
    }
  },
  DeckAdd: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name="add-to-photos" size={32} color={tintColor} />
    }
  }
})

const RootNavigator = StackNavigator({
  HomeScreen: {
    screen: TabNav
  },
  DeckScreen: {
    screen: Deck
  },
  QuizScreen: {
    screen: Quiz
  },
  AddQuizScreen: {
    screen: AddQuiz
  }
}, {
  headerMode: 'screen'
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    initDatabase()
  }

  render() {
    getDecks().then(decks => console.log('decks=', decks))
    const aDeck = getDeck('JavaScript')
    saveDeckTitle('NEW ABC')

    return (
      <Provider store={store}>
          <RootNavigator />
      </Provider>
    );
  }
}

