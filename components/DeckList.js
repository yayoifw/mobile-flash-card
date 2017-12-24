// List of Decks
// deskList = []
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, FlatList, TouchableOpacity, TouchableHighlight, Modal, StyleSheet, Platform} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Deck from './Deck'
import DeckAdd from './DeckAdd'
import {Feather, Ionicons} from '@expo/vector-icons'
import {ScreenWithStatusBar} from './ScreenWithStatusBar'

class DeckList extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const {params = {}} = navigation.state
  //   return {
  //     title: "DeckList",
  //     headerRight: (
  //       <TouchableOpacity
  //         onPress={() => {navigation.navigate('DeckAdd', { mode: 'add' })}}
  //         style={styles.addButton}><Feather name="plus" size={32}/></TouchableOpacity>),
  //   }
  // }

  // Hide StackNavigator's Header
  static navigationOptions = {
    header: null
  }

  state = {
    modalVisible: true
  }

  constructor(props) {
    super(props)
    console.log('constructor', props)
  }

  componentDidMount() {
  }

  onPressItem(item) {
    console.log(item)
    this.props.navigation.navigate("DeckScreen", { item })
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
    const { deckList } = this.props
    const { params } = this.props.navigation.state
    console.log(params)

    return (
      <View style={styles.container}>
        <FlatList
          data={deckList}
          renderItem={this.renderItem}
        />
      </View>
      )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
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
  }
})

function mapStateToProps(state) {
  return {
    deckList: state.decks
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     fetchDecks: () => dispatch(fetchDeckAction())
//   }
// }
export default connect(mapStateToProps, null)(DeckList)
