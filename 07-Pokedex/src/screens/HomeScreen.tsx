import React from 'react'
import { Image, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <>
      <Image 
        source={ require('../assets/pokebola.png') }
        style={ styles.pokebolaPNG }
      />

        <Text 
          style={{ 
            ...styles.title, 
            ...styles.globalMargin, 
            top: top + 20 
          }}
        >
          Pokedex
        </Text>
    </>
  )
}
