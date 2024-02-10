import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>BoxObjectModelScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingRight: 100,
    paddingVertical: 20,
    fontSize: 20,
    borderWidth: 10,
    marginRight: 10,
    marginLeft: 10,
    // backgroundColor: 'red',
    // width: 250,
  }
});