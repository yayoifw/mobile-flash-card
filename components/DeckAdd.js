import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import { StackNavigator } from 'react-navigation'
import uuidv1 from 'uuid/v1'
import {addDeck} from '../actions/decks'

class DeckAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add Deck"
  })

  state = {
    id: uuidv1(),
    title: ''
  }

  onSubmit = (e) => {
    var newDeck = {
      id: this.state.id,
      title: this.state.title,
      cards: []
    }
    addDeck(newDeck)
  }

  render() {
    return (
      <View stye={styles.container}>
        <Text style={styles.formLabel}>What is the title of your new deck?</Text>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ title: text })}
                   value={this.state.title} placeholder="Deck Title"/>
        <TouchableOpacity onPress={this.onSubmit} style={styles.submitButton}><Text style={styles.buttonTitle}>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: Platform.OS === 'ios' ? 44 : 0,
    backgroundColor: 'blue'
  },
  formLabel: {
    fontSize: 36,
    margin: 12,
    textAlign: 'center'
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

export default DeckAdd