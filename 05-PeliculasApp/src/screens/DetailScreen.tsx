import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from "react-native-vector-icons/Ionicons";


interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('screen').height

export const DetailScreen = ( { route, navigation }: Props ) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  
  const { isLoading, cast, movieFull } = useMovieDetails( movie.id ); 
  
  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
          <Image
            source={{ uri }}
            style={ styles.posterImage }
            />
        </View>
      </View>

      <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>
      
      {
        isLoading 
          ? <ActivityIndicator size={ 35 } color="gray" style={{ marginTop: 15 }} />
          : <MovieDetails movieFull={ movieFull! } cast={ cast } />
      }

      {/* Botón para cerrar */}
      <View style={ styles.backButton }>
        <TouchableOpacity onPress={ () => navigation.pop() }>
          <Icon 
            color="white" 
            name="arrow-back-outline" 
            size={40}
            />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    borderRadius: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 11,
    
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1,
    borderBottomEndRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 1000,
    elevation: 9,
    color: 'white',
  }
});