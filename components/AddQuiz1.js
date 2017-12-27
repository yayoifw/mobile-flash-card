import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Platform, Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox} from 'react-native'
import uuidv1 from 'uuid/v1'
import {addCardAction} from '../actions/cards'
import { CheckBox } from 'react-native-elements'

class AddQuiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Quiz'
  })

  state = {
    id: uuidv1(),
    question: '',
    answer: '',
    isCorrect: false
  }

  onAddCardSubmit = (deck) => {
    if (this.state.question.length === 0) {
      Alert.alert('You need to enter the question.')
      return
    }

    if (this.state.answer.length === 0) {
      Alert.alert('You need to enter the answer.')
      return
    }

    let newCard = {
      id: this.state.id,
      parentId: deck.id,
      question: this.state.question,
      answer: this.state.answer,
      isCorrectAnswer: this.state.isCorrect
    }
    this.props.addCard(newCard)
  }

  // renderCheckBox() {
  //   if (Platform.OS === 'ios') {
  //     return (
  //       <Switch
  //         value={this.state.isCorrect}
  //         onValueChange={() => this.setState({ isCorrect: !this.state.isCorrect })}
  //       />)
  //   } else {
  //     return (
  //       <CheckBox
  //         value={this.state.isCorrect}
  //         onValueChange={() => this.setState({ isCorrect: !this.state.isCorrect })}
  //       />
  //     )
  //   }
  // }

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
        {/*this.renderCheckBox()*/}
        <TouchableOpacity onPress={() => this.onAddCardSubmit(deck)} style={styles.submitButton}>
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
    addCard: (card) => dispatch(addCardAction(card))
  }
}

export default connect(null, mapDispatchToProps)(AddQuiz)
