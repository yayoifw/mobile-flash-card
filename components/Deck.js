// Deck
// string name
// list card []
//
// Card (Quiz)
// question
// answer
// point

import React, { Component } from 'react'
import {Platform, View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deckName}`
  })

  onPressAddCard(navigation, item) {
    navigation.navigate("AddQuizScreen", { deck: item })
  }

  onPressStartQuiz(navigation, item) {
    const cardId = item.questions.length === 0 ? null : item.questions[0].id
    navigation.navigate("QuizScreen", { deck: item, cardIndex: 0 })
  }

  findDeck(decks, deckId) {
    return decks.find(item => (item.title === deckId))
  }

  render() {
    const { params } = this.props.navigation.state
    const { deckId } = params
    const deck = this.findDeck(this.props.decks, deckId)
    const startQuizButtonDisabled = (deck.questions.length === 0)
    const startQuizButtonStyle = startQuizButtonDisabled ? styles.disabledButton : styles.blackButton
    const startQuizButtonTitleStyle = startQuizButtonDisabled ? styles.disabledButtonTitle : styles.blackButtonTitle

    return (
      <View style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckSubTitle}>{deck.questions.length} cards</Text>
        </View>
        <View style={styles.controlGroupView}>
          <TouchableOpacity style={styles.whiteButton} onPress={() => {
            this.onPressAddCard(this.props.navigation, deck)}}>
            <Text style={styles.whiteButtonTitle}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={startQuizButtonDisabled} style={startQuizButtonStyle} onPress={() => {
            this.onPressStartQuiz(this.props.navigation, deck)}}>
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
    borderColor: 'black',
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

const mapStateToProps = (state) => ({
  decks: state.decks
})

export default connect(mapStateToProps, null)(Deck)