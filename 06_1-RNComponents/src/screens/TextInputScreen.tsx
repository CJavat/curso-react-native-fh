import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const TextInputScreen = () => {

  const [form, setform] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const onChange = ( value: string, field: string ) => {
    setform({
      ...form,
      [field]: value
    })
  }

  return (
    <View style={ styles.globalMargin }>
      <HeaderTitle title='TextInputScreen' />

      <TextInput 
        style={ stylesScreen.inputStyle }
        placeholder='Ingrese su nombre'
        autoCorrect={ false }
        autoCapitalize='words'
        onChangeText={ ( value ) => onChange( value, 'name' ) }
        // value={ text }
      />

      <TextInput 
        style={ stylesScreen.inputStyle }
        placeholder='Ingrese su email'
        autoCorrect={ false }
        autoCapitalize='none'
        keyboardType='email-address'
        onChangeText={ ( value ) => onChange( value, 'email' ) }
        // value={ text }
      />

      <TextInput 
        style={ stylesScreen.inputStyle }
        placeholder='Ingrese su teléfono'
        keyboardType='phone-pad'
        onChangeText={ ( value ) => onChange( value, 'phone' ) }
        // value={ text }
      />

      <HeaderTitle title={ JSON.stringify( form, null, 3)} />
    </View>
  )
}
//asda
asdas
//estilos
const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba( 0,  0,  0, 0.3 )',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  }
});