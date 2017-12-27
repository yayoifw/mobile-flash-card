import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
//import { StackNavigator } from 'react-navigation'
import uuidv1 from 'uuid/v1'
import {addDeckAction} from '../actions/decks'
import ScreenWithStatusBar from './ScreenWithStatusBar'

class DeckAdd extends Component {
  // Hide StackNavigator's Header
  static navigationOptions = {
    header: null
  }

  state = {
    id: uuidv1(),
    title: ''
  }

  onSubmit = (e) => {
    if (this.state.title.length === 0) {
      Alert.alert(
        'You need to enter the Deck Title'
      )
      return
    }

    let newDeck = {
      id: this.state.id,
      name: this.state.title,
      cards: []
    }
    this.props.addDeck(newDeck)
  }

  render() {
    return (
      <ScreenWithStatusBar>
        <Text style={styles.formLabel}>What is the title of your new deck?</Text>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ title: text })}
                   value={this.state.title} placeholder="Deck Title"/>
        <TouchableOpacity onPress={this.onSubmit} style={styles.submitButton}><Text style={styles.buttonTitle}>Submit</Text></TouchableOpacity>
      </ScreenWithStatusBar>
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


function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deck) => dispatch(addDeckAction(deck))
  }
}

export default connect(null, mapDispatchToProps)(DeckAdd)