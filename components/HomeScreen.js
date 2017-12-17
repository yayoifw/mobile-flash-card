import React, {Component} from 'react'
import {StatusBar, View, StyleSheet} from 'react-native'
import {TabNavigator} from 'react-navigation'
import DeckList from './DeckList'
import Deck from './Deck'
import DeckAdd from './DeckAdd'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import {Constants} from 'expo'

const TabNav = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="cards-variant" size={32} color={tintColor} />
    }
  },
  DeckAdd: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name="add-to-photos" size={32} color={tintColor} />
    }
  }
})

export default class HomeScreen extends Component {
  render() {
    const backgroundColor = 'purple'
    return (
      <View style={styles.container}>
        <View  style={styles.statusBar} backgroundColor={'#000000'}>
          <StatusBar translucent barStyle="light-content" {...this.props} />
        </View>
        <TabNav/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: Constants.statusBarHeight
  }

})