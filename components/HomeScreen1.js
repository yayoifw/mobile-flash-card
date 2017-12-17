import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import DeckList from './DeckList'
import Deck from './Deck'
import DeckAdd from './DeckAdd'

const StackNav = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck
  },
  DeckAdd: {
    screen: DeckAdd
  }
})

export default class HomeScreen extends Component {
  render() {
    return (
      <StackNav />
    )
  }
}