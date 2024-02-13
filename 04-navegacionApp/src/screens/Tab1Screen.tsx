import React, { useEffect } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View } from 'react-native'
import { colores, styles } from '../themes/app.theme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

  useEffect(() => {
    console.log("Tab1Screen effect");
  }, [])
  

  return (
    <View style={ styles.globalMargin } >
      <Text style={ styles.title } >Tab1Screen</Text>

      <Text>
        <TouchableIcon iconName='airplane-outline' />
        <TouchableIcon iconName='accessibility-outline' />
        <TouchableIcon iconName='american-football-primary' />
        <TouchableIcon iconName='at-outline' />
        <TouchableIcon iconName='basketball-outline' />
        <TouchableIcon iconName='barbell-outline' />
      </Text>
    </View>
  )
}
