import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

export default class Quiz extends Component {
  onPress() {
    alert('onPress')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}><Text style={{flex:1}}>Header</Text></View>
        <View style={styles.content}>
          <View>
            <Text>2/2</Text>
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
    fontSize: 12,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  quizControlButtonTitle: {
    color: 'white',
    fontWeight: 'bold'
  }
})