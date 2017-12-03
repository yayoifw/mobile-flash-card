import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from './components/Quiz'
import DeckList from './components/DeckList'
import HomeScreen from './components/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
        <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
