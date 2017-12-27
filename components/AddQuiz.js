import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import uuidv1 from 'uuid/v1'
import {addCardAction} from '../actions/cards'

class AddQuiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Quiz'
  })

  state = {
    id: uuidv1(),
    question: '',
    answer: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ question: text })}
                   value={this.state.title} placeholder="Question"/>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ answer: text })}
                   value={this.state.title} placeholder="Answer"/>
        <TouchableOpacity onPress={this.onSubmit} style={styles.submitButton}><Text style={styles.buttonTitle}>Submit</Text></TouchableOpacity>
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

export default AddQuiz