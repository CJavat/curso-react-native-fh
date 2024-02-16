import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreen = () => {
  
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
        <Text style={ styles.switchText }>isActive</Text>
        <CustomSwitch 
          isOn={ isActive } 
          onChange={ (value) => onChange(value, 'isActive') }
        />
      </View>

      <View style={ styles.switchRow }>
        <Text style={ styles.switchText }>isHungry</Text>
        <CustomSwitch 
          isOn={ isHungry } 
          onChange={ (value) => onChange(value, 'isHungry') }
        />
      </View>

      <View style={ styles.switchRow }>
        <Text style={ styles.switchText }>isHappy</Text>
        <CustomSwitch 
          isOn={ isHappy } 
          onChange={ (value) => onChange(value, 'isHappy') }
        />
      </View>

      <Text style={ styles.switchText }>
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