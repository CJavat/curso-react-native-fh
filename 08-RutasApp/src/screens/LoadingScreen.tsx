import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export const LoadingScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ActivityIndicator 
        size={ 50 }
        color="grey"
      />
    </View>
  )
}
