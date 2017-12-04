// List of Decks
// deskList = []
import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
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
        <TouchableOpacity style={styles.addButton}><Text>Add</Text></TouchableOpacity>),
    }
  }

  onPressItem(item) {
    console.log(item)
    this.props.navigation.navigate("Deck", { item })
  }

  renderSeparator() {
    return (<View style={{ height: 1, backgroundColor: 'black'}}/>)
  }

  // Define a func as class property. 'this' obj is bind in enclosing scope.
  renderItem = ({item}) => {
    const { name, cards } = item
    const noOfCards = cards.length
    return (
      <View style={styles.listCell}>
        <TouchableOpacity onPress={() => {this.onPressItem(item)}}>
          <Text style={styles.listTitle}>{name}</Text>
          <Text style={styles.listSubTitle}>{noOfCards} cards</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={decks}
        renderItem={this.renderItem}
      />)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  listCell: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: 'black',
    alignItems:'center'
  },
  listTitle: {
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 32,
    textAlign: 'center'
  },
  listSubTitle: {
    fontSize: 14,
    textAlign: 'center'
  },
  addButton: {
    marginRight: 8,
    padding: 6,
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: 'orange',
  }

})