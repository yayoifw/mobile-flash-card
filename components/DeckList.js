// List of Decks
// deskList = []
import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Deck from './Deck'

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
  static navigationOptions = ({ navigation }) => {
    return {
      title: "DeckList",
      headerRight: (
        <TouchableOpacity><Text>Add</Text></TouchableOpacity>),
    }
  }

  onPressItem(item) {
    console.log(item)
    this.props.navigation.navigate("Deck", { item })
  }

  // Define a func as class property. 'this' obj is bind in enclosing scope.
  renderItem = ({item}) => {
    const { name, cards } = item
    const noOfCards = cards.length
    return (
      <View>
        <TouchableOpacity onPress={() => {this.onPressItem(item)}}>
          <Text>{name}</Text>
          <Text>{noOfCards} cards</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (<FlatList data={decks} renderItem={this.renderItem} />)
  }
}

const StackNav = StackNavigator({
  DeckList: {
    screen: DeckList,
  },
  DeckDetails: {
    screen: Deck
  },
})

export default DeckList