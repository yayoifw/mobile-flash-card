import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


class Card extends Component {
  // Has two sides: 'question' and 'answer'
  state = {
    isFront: true
  }

  setSide = (isFront) => {
    this.setState({
      isFront: isFront
    })
  }

  render() {
    const {card} = this.props

    if (this.state.isFront) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Question</Text>
          <Text style={styles.title}>{card.question}</Text>
          <TouchableOpacity onPress={() => this.setSide(false)}><Text style={[styles.subtitle, {color:'red'}]}>show answer</Text></TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Answer</Text>
          <Text style={styles.title}>{card.answer}</Text>
          <TouchableOpacity onPress={() => this.setSide(true)}><Text style={[styles.subtitle, {color:'blue'}]}>show question</Text></TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 18,
  }
})

export default Card