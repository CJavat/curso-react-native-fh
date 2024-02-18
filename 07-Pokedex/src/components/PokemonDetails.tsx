import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
  color: string;
}

export const PokemonDetails = ( { pokemon, color }: Props ) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={ false }
      style={{
        ...StyleSheet.absoluteFillObject
      }}
    >
      {/* Types y Peso */}
      <View style={{
        ...styles.container,
        marginTop: 350,
      }}>
        <Text style={ styles.title }>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map( ({ type }) => {
              return (
                <Text 
                  key={ type.name }
                  style={{
                    ...styles.regularText,
                    ...styles.info,
                    marginRight: 10,
                    borderColor: color,
                    color: color,
                    width: 90
                  }}  
                >
                  { type.name }
                </Text>
              )
            })
          }
        </View>

        {/* Peso */}
        <Text style={ styles.title }>Peso</Text>
        <Text 
          style={{ 
            ...styles.regularText, 
            ...styles.info,
            borderColor: color,
            color: color,
            width: 90
          }}
        >
          { pokemon.weight } kg
        </Text>
      </View>
      {/* Sprites */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Sprites</Text>
        <ScrollView
          horizontal={ true }
          showsHorizontalScrollIndicator={ false }
        >
          <FadeInImage 
            uri={ pokemon.sprites.front_default }
            style={ styles.basicSprites }
          />
          <FadeInImage 
            uri={ pokemon.sprites.back_default }
            style={ styles.basicSprites }
          />
          <FadeInImage 
            uri={ pokemon.sprites.front_shiny }
            style={ styles.basicSprites }
          />
          <FadeInImage 
            uri={ pokemon.sprites.back_shiny }
            style={ styles.basicSprites }
          />
        </ScrollView>
      </View>

      {/* Habilidades */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Habilidades Base</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.abilities.map( ({ ability }) => {
              return (
                <Text
                  key={ ability.name }
                  style={{
                    ...styles.regularText,
                    ...styles.info,
                    marginRight: 10,
                    borderColor: color,
                    color: color
                  }}  
                >
                  { ability.name }
                </Text>
              )
            })
          }
        </View>
      </View>

      {/* Movimientos */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Habilidades Base</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            pokemon.moves.map( ({ move }) => {
              return (
                <Text
                  key={ move.name }
                  style={{
                    ...styles.regularText,
                    ...styles.info,
                    marginRight: 10,
                    borderColor: color,
                    color: color
                  }}  
                >
                  { move.name }
                </Text>
              )
            })
          }
        </View>
      </View>
      
      {/* Stats */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Stats</Text>
        <View>
          {
            pokemon.stats.map( ( stat, index ) => {
              return (
                <View key={ stat.stat.name + index } style={{ flexDirection: 'row' } }>
                  <Text
                    
                    style={{
                      ...styles.regularText,
                      ...styles.info,
                      flex: 1,
                      marginRight: 10,
                      borderColor: color,
                      color: color,
                      fontWeight: 'normal',
                    }}  
                  >
                    { stat.stat.name }
                  </Text>

                  <Text
                    style={{
                      ...styles.regularText,
                      ...styles.info,
                      marginRight: 10,
                      borderColor: color,
                      color: color
                    }}  
                  >
                    { stat.base_stat }
                  </Text>
                </View>
              )
            })
          }
        </View>

        {/* Sprite Final */}
        <View style={{
          marginBottom: 20,
          alignItems: 'center',
        }}>
          <FadeInImage 
            uri={ pokemon.sprites.front_default }
            style={ styles.basicSprites }
          />
        </View>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19
  },
  basicSprites: {
    width: 100,
    height: 100,
  },
  info: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    fontWeight: 'bold',
    margin: 5,
  }
});