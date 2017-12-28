import React from 'react';
import {Platform, StatusBar} from 'react-native'
import store from './utils/store'
import {Provider} from 'react-redux'
import {TabNavigator, StackNavigator} from 'react-navigation'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddQuiz from './components/AddQuiz'
import DeckList from './components/DeckList'
import DeckAdd from './components/DeckAdd'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'

import {initDatabase} from './utils/api'


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
}, { tabBarOptions: { style: { backgroundColor: 'rgb(64,64,64)' } } })
// Note: If using TabBar, marginTop: is needed for Android to avoid Tab overlaps with StatusBar.
// { tabBarOptions: { style: { backgroundColor: 'rgb(64,64,64)', marginTop: Platform.OS === 'ios' ? 0 : 24} }
// But since it is nested in StackNavigator, below paddingTop in StackNavigator 2nd parm will take care of it.

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
  headerMode: 'screen',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})
// Note: paddingTop: is needed for Android to avoid Tab overlap with StatusBar


export default class App extends React.Component {
  constructor(props) {
    super(props)
    initDatabase()
  }

  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
          <RootNavigator />
      </Provider>
    );
  }
}

