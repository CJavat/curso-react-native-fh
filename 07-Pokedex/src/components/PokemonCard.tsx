import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ( { pokemon }: Props ) => {

  const { navigate } = useNavigation();
  const [bgColor, setBgColor] = useState("gray");
  const isMounted = useRef(true);


  useEffect(() => {
    ImageColors.getColors( pokemon.picture, { fallback: 'grey' })
    .then( colors => {

      if( !isMounted.current ) return;

      // Android: Dominant
      if( colors.platform === 'android' ) {
        setBgColor( colors.dominant || 'gray' );
      }
      // IOS: background
      if( colors.platform === 'ios' ) {
        setBgColor( colors.background || 'gray' );
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);
  

  return (
    <TouchableOpacity
      activeOpacity={ 0.9 }
      onPress={ () => navigate('PokemonScreen', {
        simplePokemon: pokemon,
        color: bgColor,
      })}
    >
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgColor,
      }}>
        {/* Nombre del pokemon y ID */}
        <View>
          <Text style={ styles.name }>
            { pokemon.name }
            { '\n#' + pokemon.id }
          </Text>
        </View>

        <View style={ styles.pokebolaContainer }>
          <Image 
            source={ require('../assets/pokebola-blanca.png') }
            style={ styles.pokebola }
          />
        </View>

        <FadeInImage 
          uri={ pokemon.picture }
          style={ styles.pokemonImage }
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 150,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  }
});