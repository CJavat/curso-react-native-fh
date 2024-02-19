import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { PokemonCard } from '../components/PokemonCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  
  return (
    <>
      <Image 
        source={ require('../assets/pokebola.png') }
        style={ styles.pokebolaPNG }
      />

      <View style={{ alignItems: 'center' }}>
        <FlatList 
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id.toString() }
          showsVerticalScrollIndicator={ false }
          numColumns={ 2 }
          renderItem={ ({ item }) => ( <PokemonCard pokemon={ item } /> )}

          // Header
          ListHeaderComponent={ () =>(
            <Text 
              style={{ 
                ...styles.title, 
                ...styles.globalMargin,
                color: 'black',
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}
            >
              Pokedex
            </Text> 
          )}

          // Inifinite Scroll
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 }

          ListFooterComponent={ 
            <ActivityIndicator 
              style={{ height: 100 }} 
              size={ 20 }
              color="grey"
          />}
        />
      </View>
    </>
  )
}
