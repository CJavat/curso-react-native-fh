import React, { useEffect } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View } from 'react-native'
import { colores, styles } from '../themes/app.theme';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log("Tab1Screen effect");
  }, [])
  

  return (
    <View style={ styles.globalMargin } >
      <Text style={ styles.title } >Tab1Screen</Text>

      <Text>
        <Icon name='airplane-outline' size={50} color={ colores.primary } />
        <Icon name='accessibility-outline' size={50} color={ colores.primary } />
        <Icon name='american-football-outline' size={50} color={ colores.primary } />
        <Icon name='at-outline' size={50} color={ colores.primary } />
        <Icon name='basketball-outline' size={50} color={ colores.primary } />
        <Icon name='barbell-outline' size={50} color={ colores.primary } />
      </Text>
    </View>
  )
}
