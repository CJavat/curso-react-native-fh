import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/app.theme'

interface Props extends StackScreenProps<any, any> {};

export const Pagina1Screen = ( { navigation }: Props ) => {
  return (
    <View style={ styles.globalMargin } >
      <Text>Pagina1Screen</Text>

      <Button
        title='Ir Página 2'
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />
    </View>
  )
}
