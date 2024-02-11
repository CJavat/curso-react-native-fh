import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/app.theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { DrawerScreenProps } from '@react-navigation/drawer'

// interface Props extends StackScreenProps<any, any> {};
interface Props extends DrawerScreenProps<any, any> {};

export const Pagina1Screen = ( { navigation }: Props ) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button 
  //         title='Menú'
  //         onPress={ () => navigation.toggleDrawer() }
  //       />
  //     )
  //   })
  // }, [])

  return (
    <View style={ styles.globalMargin } >
      <Text style={ styles.title } >Pagina1Screen</Text>

      <Button
        title='Ir Página 2'
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />
      
      <Text 
        style={{ 
          fontSize: 20, 
          color: 'black',
          marginVertical: 10
        }}
      >
        Navegar con argumentos
      </Text>

      <View style={{ flexDirection: 'row' }} >
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          }) }
        >
          <Text style={ styles.botonGrandeTexto } >Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          }) }
        >
          <Text style={ styles.botonGrandeTexto } >Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
