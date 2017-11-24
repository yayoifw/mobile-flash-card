import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quiz from './components/Quiz'

export default class App extends React.Component {
  render() {
    return (
        <Quiz />
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
