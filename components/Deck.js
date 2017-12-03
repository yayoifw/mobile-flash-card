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
  static navigationOptions = ({ navigation }) => ({
    title: "Deck"
  })

  render() {
    const { params } = this.props.navigation.state
    const { name, cards } = params.item

    return (
      <View>
        <Text>Deck: {name}</Text>
        <Text>No of cards: {cards.length}</Text>
      </View>
    )
  }
}

export default Deck