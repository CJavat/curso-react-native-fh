import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

  const { setDarkTheme } = useContext( ThemeContext );

  return (
    <View>
      <HeaderTitle title='Theme' />

      <TouchableOpacity
        onPress={ setDarkTheme }
        activeOpacity={ 0.5 }
        style={{
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20
        }}
      >
        <Text style={{ 
            color: 'white', 
            textAlign: 'center',
            fontSize: 22,
        }}>
          Light / Dark
        </Text>
      </TouchableOpacity>

    </View>
  )
}
