import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  
  const { peliculasEnCine, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  
  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={ 100 } />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }} >
        {/* <MoviePoster movie={ peliculasEnCine[0] } /> */}

        {/* Carousel Principal */}
        <View style={{ height: 440 }}>
          <Carousel 
            data={ peliculasEnCine }
            renderItem={ ({ item }) => <MoviePoster movie={ item } /> }
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
          />
        </View>

        {/* Películas Populares */}
        <HorizontalSlider title='En Cine' movies={ peliculasEnCine } />
      
      </View>
    </ScrollView>
  )
}
