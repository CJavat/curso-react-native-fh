import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  
  const { upcoming, nowPlaying, popular, topRated, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors, setPrevMainColors } = useContext( GradientContext );
  
  const getPosterColors = async ( index: number ) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );

    setMainColors({ primary, secondary })
  }

  useEffect(() => {
    if( nowPlaying.length > 0 ) {
      getPosterColors(0);
    }
  }, [ nowPlaying ]);
  
  
  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="red" size={ 100 } />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }} >
          {/* <MoviePoster movie={ peliculasEnCine[0] } /> */}

          {/* Carousel Principal */}
          <View style={{ height: 440 }}>
            <Carousel 
              data={ nowPlaying }
              renderItem={ ({ item }) => <MoviePoster movie={ item } /> }
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              onSnapToItem={ index => getPosterColors( index ) }
            />
          </View>

          {/* Películas Populares */}
          <HorizontalSlider title='Popular' movies={ popular } />
          <HorizontalSlider title='Top Rated' movies={ topRated } />
          <HorizontalSlider title='Upcoming' movies={ upcoming } />
        
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
