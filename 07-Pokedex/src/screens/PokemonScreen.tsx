import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/Tab1'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import { usePokemon } from '../hooks/usePokemon'
import { PokemonDetails } from '../components/PokemonDetails'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( { route, navigation }: Props ) => {
  const { simplePokemon, color } = route.params;
  const { name, id, picture } = simplePokemon;
  
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon } = usePokemon( id );

  return (
    <View style={{ flex: 1 }}>

      {/* HeaderContainer */}
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>

        {/* BackButton */}
        <View style={{ ...styles.backButton, top: top + 10 }}>
          <TouchableOpacity
            onPress={ () => navigation.pop() }
            activeOpacity={ 0.8 }
          >
            <Icon name="arrow-back-outline" color="white" size={ 35 } />
          </TouchableOpacity>
        </View>

        {/* Nombre del Pokemon */}
        <Text style={{ ...styles.pokemonName, top: top + 45 }}>{ name + '\n' }#{ id }</Text>

        {/* Pokebola blanca */}
        <Image 
          source={ require('../assets/pokebola-blanca.png') }
          style={{ ...styles.pokeball }}
        />

        <FadeInImage 
          uri={ picture }
          style={ styles.pokemonImage }
        />
      </View>

      {/* Detalles y Loading */}
      {
        isLoading 
          ? ( <View style={ styles.loadingIndicator }>
                <ActivityIndicator 
                  color={ color }
                  size={ 50 }
                />
              </View>
            )
          : <PokemonDetails pokemon={ pokemon } color={ color } />
      }
      

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});