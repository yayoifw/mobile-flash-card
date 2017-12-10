// List of Decks
// deskList = []
import React, {Component} from 'react'
import {View, Text, FlatList, TouchableOpacity, TouchableHighlight, Modal, StyleSheet} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Deck from './Deck'
import {Feather, Ionicons} from '@expo/vector-icons'

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
        <TouchableOpacity style={styles.addButton}><Feather name="plus" size={32}/></TouchableOpacity>),
    }
  }
  state = {
    modalVisible: false
  }

  toggleModal(isVisible) {
    this.setState({
      modalVisible: isVisible
    })
  }

  onPressItem(item) {
    console.log(item)
    this.props.navigation.navigate("Deck", { item })
  }

  renderModal() {
    return (
      <Modal visible={this.state.modalVisible} transparent={true}
             onRequestClose={() => {
               console.log("Modal has been closed.")
             }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Add Deck</Text>
            <Ionicons name="ios-close" size={32}/>
            <Text style={styles.text}>Modal is open!</Text>

            <TouchableHighlight onPress={() => {
              this.toggleModal(!this.state.modalVisible)
            }}>

              <Text style={styles.text}>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
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
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
        />
        {this.renderModal()}
      </View>)
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
    justifyContent: 'center',
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
  },
  modal: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  modalContainer: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },

})