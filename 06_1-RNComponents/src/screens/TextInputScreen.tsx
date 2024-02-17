import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const TextInputScreen = () => {
  const { theme: { colors, dividerColor } } = useContext( ThemeContext );

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
        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.border }}
        placeholder='Ingrese su nombre'
        autoCorrect={ false }
        autoCapitalize='words'
        onChangeText={ ( value ) => onChange( value, 'name' ) }
        placeholderTextColor={ dividerColor }
      />

      <TextInput 
        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.border }}
        placeholder='Ingrese su email'
        autoCorrect={ false }
        autoCapitalize='none'
        keyboardType='email-address'
        onChangeText={ ( value ) => onChange( value, 'email' ) }
        placeholderTextColor={ dividerColor }
      />

      <TextInput 
        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.border }}
        placeholder='Ingrese su teléfono'
        keyboardType='phone-pad'
        onChangeText={ ( value ) => onChange( value, 'phone' ) }
        placeholderTextColor={ dividerColor }
      />

      <HeaderTitle title={ JSON.stringify( form, null, 3)} />
    </View>
  )
}

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  }
});