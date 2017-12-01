// Deck
// string name
// list card []
//
// Card (Quiz)
// question
// answer
// point

import React, { Component } from 'react'
import {View,Text} from 'react-native'

class Deck extends Component {
  render() {
    const { name, cards } = this.props

    return (
      <View>
        <Text>Deck: {name}</Text>
        <Text>No of cards: {cards.length}</Text>
      </View>
    )
  }
}

export default Deck