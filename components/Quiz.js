/**
 * Quiz: a quiz is a card containing the question and answer.
 * - question
 * - answer
 * - isAnswerShown
 */
import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import {fetchCard} from "../actions/cards";

export default class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.name}`
  })

  componentDidMount() {
    // const { params } = this.props.navigation.state
    // fetchCard(params.cardId)
  }

  onPress() {
    alert('onPress')
  }
  render() {
    const { params } = this.props.navigation.state
    const { deck } = params
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <Text>2/{deck.cards.length}</Text>
            <Text>Score: 80</Text>
            <Text>Quiz Question</Text>
            <TouchableHighlight onPress={this.onPress}><Text>show answer</Text></TouchableHighlight>
          </View>
          <View style={styles.quizControl}>
            <TouchableHighlight style={styles.quizControlButton} onPress={this.onPress}>
              <Text style={styles.quizControlButtonTitle}>Correct</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.quizControlButton} onPress={this.onPress}>
              <Text style={styles.quizControlButtonTitle}>InCorrect</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'orange'
  },
  header: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'pink'
  },
  content: {
    flex:1,
    backgroundColor: 'yellow'
  },
  quizControl: {
    backgroundColor: '#F0F8FF'
  },
  quizControlButton: {
    margin: 10,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  quizControlButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  }
})


function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDecks: () => dispatch(fetchDeckAction())
//   }
// }