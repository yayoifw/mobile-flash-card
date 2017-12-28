import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Alert, View, Text, TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import {addDeckAction} from '../actions/decks'
import ScreenWithStatusBar from './ScreenWithStatusBar'
import {saveDeckTitle} from '../utils/api'
import {globalStyles} from '../utils/globalStyles'

class DeckAdd extends Component {
  // Hide StackNavigator's Header
  static navigationOptions = {
    header: null
  }

  state = {
    title: ''
  }

  onSubmit = (e) => {
    const title = this.state.title.trim()
    if (title === '') {
      Alert.alert(
        'You need to enter the Deck Title'
      )
      return
    }

    // reset state
    this.setState({
      title:''
    })

    // add deck
    let newDeck = {
      title: title,
      questions: []
    }
    this.props.addDeckAction(newDeck)
    saveDeckTitle(title)
    this.props.navigation.navigate("DeckScreen", { deckId: title, deckName: title })
  }

  render() {
    return (
      <ScreenWithStatusBar>
        <Text style={globalStyles.formLabel}>What is the title of your new deck?</Text>
        <TextInput style={globalStyles.formInput}
                   onChangeText={(text) => this.setState({ title: text })}
                   value={this.state.title} placeholder="Deck Title"/>
        <TouchableOpacity onPress={this.onSubmit} style={globalStyles.submitButton}>
          <Text style={globalStyles.submitButtonTitle}>Submit</Text>
        </TouchableOpacity>
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
  }
})

export default connect(null, {addDeckAction})(DeckAdd)