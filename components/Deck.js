// Deck
// string name
// list card []
//
// Card (Quiz)
// question
// answer
// point

import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Deck",
    headerStyle: {height: 60}
  })

  onPressCard(navigation) {
    navigation.navigate("QuizScreen")
  }

  render() {
    const { params } = this.props.navigation.state
    const { name, cards } = params.item

    return (
      <View>
        <Text>Deck: {name}</Text>
        <Text>No of cards: {cards.length}</Text>
        <TouchableOpacity onPress={() => {this.onPressCard(this.props.navigation)}}><Text>Card</Text></TouchableOpacity>
      </View>
    )
  }
}

export default Deck