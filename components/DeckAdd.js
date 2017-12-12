import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { StackNavigator } from 'react-navigation'

class DeckAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Add Deck"
  })

  state = {
    value: 'abc'
  }

  render() {
    return (
      <View stye={styles.container}>
        <Text>Name</Text>
        <TextInput style={styles.formInput}
                   onChangeText={(text) => this.setState({ value: text})}
                   value='abc'/>
        <TouchableOpacity><Text>Add Deck</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default DeckAdd