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
import ScreenWithStatusBar from './components/ScreenWithStatusBar'


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
  render() {
    return (
      <Provider store={store}>
        <ScreenWithStatusBar>
          <RootNavigator />
        </ScreenWithStatusBar>
      </Provider>
    );
  }
}

