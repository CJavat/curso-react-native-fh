import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/app.theme'
import { useNavigation } from '@react-navigation/native'

export const Pagina2Screen = () => {

  const navigation = useNavigation();

  return (
    <View style={ styles.globalMargin }>
      <Text>Pagina2Screen</Text>

      <Button
        title='Ir Página 3'
        onPress={ () => navigation.navigate('Pagina3Screen' as never) }
      />
    </View>
  )
}
