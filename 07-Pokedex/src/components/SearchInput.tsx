import React, { useEffect, useState } from 'react'
import { Platform, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: ( value: string ) => void;
}

export const SearchInput = ( { style, onDebounce }: Props ) => {

  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebouncedValue( textValue );

  useEffect(() => {
    onDebounce( debouncedValue );
  }, [debouncedValue])
  

  return (
    <View style={{
      ...styles.container,
      ...style as any,
    }}>
      <View style={{
        ...styles.textBackground,
        top: ( Platform.OS === 'ios' ) ? 0 : 2
      }}>
        <TextInput
          placeholder='Buscar Pokémon'
          style={ styles.textInput }
          autoCapitalize="none"
          autoCorrect={ false }
          value={ textValue }
          onChangeText={ setTextValue }
          placeholderTextColor="grey"
        />

        <Icon 
          name="search-outline"
          color="gray"
          size={ 30 }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,

  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'black'
  }

});
