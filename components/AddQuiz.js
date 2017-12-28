import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import uuidv1 from 'uuid/v1'
import {addCardAction} from '../actions/cards'
import {addcardToDeck} from '../utils/api'


class AddQuiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Add Quiz in ${navigation.state.params.deck.title}`
  })

  state = {
    question: '',
    answer: '',
  }

  onAddCardSubmit = (navigation, deck) => {
    const question = this.state.question.trim()
    if (question.length === 0) {
      Alert.alert('You need to enter the question.')
      return
    }

    const answer = this.state.answer.trim()
    if (answer.length === 0) {
      Alert.alert('You need to enter the answer.')
      return
    }

    let newCard = {
      question: question,
      answer: answer,
    }
    this.props.addCard(newCard, deck.title)
    addcardToDeck(deck.title, newCard)
    navigation.goBack()
  }

  render() {
    const { params } = this.props.navigation.state
    const { deck } = params
    return (
      <View style={styles.container}>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ question: text })}
                   value={this.state.title} placeholder="Question"/>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ answer: text })}
                   value={this.state.title} placeholder="Answer"/>
        <TouchableOpacity onPress={() => this.onAddCardSubmit(this.props.navigation, deck)} style={styles.submitButton}>
          <Text style={styles.buttonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 12,
    padding: 8,
  },
  submitButton: {
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
  buttonTitle: {
    fontSize: 32,
    color: 'white',
    textAlign:'center',
  }
})

function mapDispatchToProps(dispatch) {
  return {
    addCard: (card, parentId) => dispatch(addCardAction(card, parentId))
  }
}

export default connect(null, mapDispatchToProps)(AddQuiz)
