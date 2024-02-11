import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/app.theme'

export const Pagina2Screen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Hola Mundo",
      headerBackTitle: 'Atrás'
    });
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title } >Pagina2Screen</Text>

      <Button
        title='Ir Página 3'
        onPress={ () => navigation.navigate('Pagina3Screen' as never) }
      />
    </View>
  )
}
