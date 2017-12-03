import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import DeckList from './DeckList'
import Deck from './Deck'

const StackNav = StackNavigator({
  DeckList: {
    screen: DeckList
  },
  Deck: {
    screen: Deck
  }
})

export default class HomeScreen extends Component {
  render() {
    return (
      <StackNav />
    )
  }
}