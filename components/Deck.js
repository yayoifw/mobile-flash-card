// Deck
// string name
// list card []
//
// Card (Quiz)
// question
// answer
// point

import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.item.name}`
  })

  onPressAddCard(navigation) {
    navigation.navigate("AddQuizScreen")
  }

  onPressStartQuiz(navigation) {
    navigation.navigate("QuizScreen")
  }

  render() {
    const { params } = this.props.navigation.state
    const { name, cards } = params.item

    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.deckTitle}>{name}</Text>
          <Text style={styles.deckSubTitle}>No of cards: {cards.length}</Text>
        </View>
        <View style={styles.controlGroupView}>
          <TouchableOpacity style={styles.whiteButton} onPress={() => {
            this.onPressAddCard(this.props.navigation)}}>
            <Text style={styles.whiteButtonTitle}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blackButton} onPress={() => {
            this.onPressStartQuiz(this.props.navigation)}}>
            <Text style={styles.blackButtonTitle}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  mainView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlGroupView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 48,
  },
  deckSubTitle: {
    fontSize: 28
  },
  whiteButton: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight:12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    width: '50%',
    alignSelf: 'center',
    marginBottom: 32
  },
  whiteButtonTitle: {
    fontSize: 32,
    color: 'black',
    textAlign:'center',
  },
  blackButton: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight:12,
    borderWidth: 1,
    borderRadius: 8,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'black'
  },
  blackButtonTitle: {
    fontSize: 32,
    color: 'white',
    textAlign:'center',
  }
})

export default Deck