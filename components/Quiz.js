/**
 * Quiz: a quiz is a card containing the question and answer.
 * - question
 * - answer
 * - isAnswerShown
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import Card from './Card'
import {clearLocalNotification, setLocalNotification} from '../utils/notification'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`
  })

  componentDidMount() {
    // If quiz page is invoked, clear existing notification and set a new notification for tomorrow.
    clearLocalNotification().then(setLocalNotification)
  }

  state = {
    cardIndex: 0,
    noOfCorrectAnswers: 0,
    quizCompleted: false
  }

  onPressHomeScreen = (navigation) => {
    navigation.navigate("HomeScreen")
  }

  onButtonPress = (deck, isCorrectAnswer) => {

    let noOfCorrectAnswers = this.state.noOfCorrectAnswers
    if (isCorrectAnswer) {
      noOfCorrectAnswers =  noOfCorrectAnswers + 1
    }

    // go to next card
    let cardIndex = this.state.cardIndex
    if ((cardIndex+1) < deck.questions.length) {
      this.setState({
        cardIndex: cardIndex + 1,
        noOfCorrectAnswers
      })
    } else {
      // reached the end of quiz
      this.setState({
        quizCompleted:true,
        noOfCorrectAnswers
      })
    }
  }


  onPressStartQuiz() {
    this.setState({
        cardIndex: 0,
        noOfCorrectAnswers: 0,
        quizCompleted: false
    })
  }

  findCard(deck, cardIndex) {
    return deck.questions[cardIndex]
  }

  render() {
    const {params} = this.props.navigation.state
    const {deck} = params
    const card = this.findCard(deck, this.state.cardIndex)

    if (this.state.quizCompleted) {
      const percentCorrect = Math.round((this.state.noOfCorrectAnswers / deck.questions.length) * 100)

      return (
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <Text style={styles.title}>You have completed {deck.questions.length} Quiz. Your score is:</Text>
            <Text style={styles.title}>{percentCorrect} %</Text>
          </View>
          <View style={styles.quizControl}>
            <TouchableHighlight style={[styles.quizControlButton, {backgroundColor:'black'}]}
                                onPress={() => this.onPressStartQuiz()}>
              <Text style={styles.quizControlButtonTitle}>ReStart Quiz</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.quizControlButton, {backgroundColor:'black'}]}
                                onPress={() => this.onPressHomeScreen(this.props.navigation)}>
              <Text style={styles.quizControlButtonTitle}>Deck List</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text>{this.state.cardIndex + 1} / {deck.questions.length}</Text>
          <Card card={card}/>
        </View>
        <View style={styles.quizControl}>
          <TouchableHighlight style={[styles.quizControlButton, { backgroundColor: 'green'}]}
                              onPress={() => this.onButtonPress(deck, true)}>
            <Text style={styles.quizControlButtonTitle}>Correct</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.quizControlButton, { backgroundColor: 'red'}]}
                              onPress={() => this.onButtonPress(deck, false)}>
            <Text style={styles.quizControlButtonTitle}>InCorrect</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:16,
  },
  mainContent: {
    flex:2,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  answer: {
    fontSize: 18,
    color: 'red'
  },
  quizControl: {
    flex:1,
  },
  quizControlButton: {
    margin: 10,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  quizControlButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
})

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDecks: () => dispatch(fetchDeckAction())
//   }
// }

export default connect(mapStateToProps, null)(Quiz)
