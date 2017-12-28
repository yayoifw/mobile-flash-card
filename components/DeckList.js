// List of Decks
// deskList = []
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, FlatList, TouchableOpacity, TouchableHighlight, Modal, StyleSheet, Platform} from 'react-native'
import ScreenWithStatusBar from './ScreenWithStatusBar'
import {decksLoadedAction} from '../actions/decks'
import {getDecks, getDecksAsArrayList, saveDeckTitle} from '../utils/api'


class DeckList extends Component {
  // Hide StackNavigator's Header
  static navigationOptions = {
    header: null
  }

  state = {
    modalVisible: true
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {decksLoaded} = this.props
    getDecksAsArrayList().then(decks => {
      decksLoaded(decks)
    })
  }

  listKeyExtractor = (item, index) => item.title

  onPressItem(item) {
    this.props.navigation.navigate("DeckScreen", { deckId: item.title, deckName: item.title })
  }

  renderSeparator() {
    return (<View style={{ height: 1, backgroundColor: 'black'}}/>)
  }

  // Define a func as class property. 'this' obj is bind in enclosing scope.
  renderItem = ({item}) => {
    const { title, questions } = item
    const noOfCards = questions.length
    return (
      <TouchableHighlight underlayColor={'#a0a1a2'} onPress={() => {this.onPressItem(item)}}>
        <View style={styles.listCell}>
          <Text style={styles.listTitle}>{title}</Text>
          <Text style={styles.listSubTitle}>{noOfCards} cards</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { deckList } = this.props
    const { params } = this.props.navigation.state
    console.log('DECK LIST', deckList)

    return (
      <ScreenWithStatusBar>
        <FlatList
          keyExtractor={this.listKeyExtractor}
          data={deckList}
          renderItem={this.renderItem}
        />
      </ScreenWithStatusBar>
    )
  }
}

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
function mapDispatchToProps(dispatch) {
  return {
    decksLoaded: (decks) => dispatch(decksLoadedAction(decks))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
