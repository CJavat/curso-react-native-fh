import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../themes/app.theme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {

  const { signIn, authState } = useContext( AuthContext );

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>ContactsScreen</Text>

      {
        !authState.isLoggedIn && <Button title="Sign In" onPress={ signIn } />
      }
      
    </View>
  )
}
