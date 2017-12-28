import React from 'react'
import {StatusBar, View, StyleSheet} from 'react-native'
import {Constants} from 'expo'

const ScreenWithStatusBar = (props) => {
    return (
      <View style={styles.container}>
        <View  style={styles.statusBar} backgroundColor={'#000000'}>
          <StatusBar translucent barStyle="light-content" {...this.props} />
        </View>
        {props.children}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: Constants.statusBarHeight
  }

})

export default ScreenWithStatusBar