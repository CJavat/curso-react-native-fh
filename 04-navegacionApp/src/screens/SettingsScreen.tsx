import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/Ionicons";
import { colores, styles } from '../themes/app.theme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState, logout } = useContext( AuthContext );

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>
      <Text style={ styles.title } >Settings Screen</Text>

      <Text>{ JSON.stringify( authState, null, 4 ) }</Text>

      {
        authState.favoriteIcon && (
          <Icon 
            name={ authState.favoriteIcon! } 
            size={100} 
            color={ colores.primary } 
          />
        )
      }

      {
        authState.isLoggedIn && (
          <Button 
            title="Logout"
            onPress={ logout }
          />
        )
      }
    </View>
  )
}
