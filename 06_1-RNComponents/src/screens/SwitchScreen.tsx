import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const { theme: { colors } } = useContext( ThemeContext );
  
  const [state, setstate] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const onChange = ( value: boolean, field: string ) => {
    setstate({
      ...state,
      [field]: value
    })
  }

  const { isActive, isHappy, isHungry} = state;

  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTitle title='Switches' />

      <View style={ styles.switchRow }>
        <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
        <CustomSwitch 
          isOn={ isActive } 
          onChange={ (value) => onChange(value, 'isActive') }
        />
      </View>

      <View style={ styles.switchRow }>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch 
          isOn={ isHungry } 
          onChange={ (value) => onChange(value, 'isHungry') }
        />
      </View>

      <View style={ styles.switchRow }>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
        <CustomSwitch 
          isOn={ isHappy } 
          onChange={ (value) => onChange(value, 'isHappy') }
        />
      </View>

      <Text style={{ ...styles.switchText, color: colors.text }}>
        {
          JSON.stringify( state, null, 5 )
        }
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 25,
  },
});