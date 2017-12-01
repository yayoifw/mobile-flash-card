// List of Decks
// deskList = []
import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { StackNavigator } from 'react-navigation'

const decks = [
  {
    key: 1,
    name: 'udacicard',
    cards: [1,2,3]
  },
  {
    key: 2,
    name: 'redux',
    cards: [4,5,6,7,8,9]
  },
  {
    key: 3,
    name: 'react',
    cards: []
  }
]

class DeckList extends Component {
  renderItem({item}) {
    const { name, cards } = item
    console.log(item)
    const noOfCards = cards.length
    return (
      <View>
        <TouchableOpacity>
          <Text>{name}</Text>
          <Text>{noOfCards} cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (<FlatList data={decks} renderItem={this.renderItem}/>)
  }
}

export default DeckList