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

  onPressAddCard(navigation, item) {
    navigation.navigate("AddQuizScreen", { deck: item })
  }

  onPressStartQuiz(navigation, item) {
    const cardId = item.cards.length === 0 ? null : item.cards[0].id
    navigation.navigate("QuizScreen", { deck: item, cardIndex: 0 })
  }

  render() {
    const { params } = this.props.navigation.state
    const { item } = params
    const startQuizButtonDisabled = (item.cards.length === 0)
    const startQuizButtonStyle = startQuizButtonDisabled ? styles.disabledButton : styles.blackButton
    const startQuizButtonTitleStyle = startQuizButtonDisabled ? styles.disabledButtonTitle : styles.blackButtonTitle

    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.deckTitle}>{item.name}</Text>
          <Text style={styles.deckSubTitle}>{item.cards.length} cards</Text>
        </View>
        <View style={styles.controlGroupView}>
          <TouchableOpacity style={styles.whiteButton} onPress={() => {
            this.onPressAddCard(this.props.navigation, item)}}>
            <Text style={styles.whiteButtonTitle}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={startQuizButtonDisabled} style={startQuizButtonStyle} onPress={() => {
            this.onPressStartQuiz(this.props.navigation, item)}}>
            <Text style={startQuizButtonTitleStyle}>Start Quiz</Text>
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
    fontSize: 28,
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
    fontSize: 28,
    color: 'white',
    textAlign:'center',
  },
  disabledButton: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight:12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'gray'
  },
  disabledButtonTitle: {
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign:'center',
  }
})

export default Deck