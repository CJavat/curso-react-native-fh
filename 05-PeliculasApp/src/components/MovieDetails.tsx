import React from 'react'
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { MovieFull } from '../interfaces/movie.Interface';
import { Cast } from '../interfaces/credits.interface';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ( { cast, movieFull }: Props ) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon 
            name="star-outline"
            color="gray"
            size={ 16 }
          />
          <Text> { movieFull.vote_average } </Text>

          <Text style={{ marginLeft: 5 }}> - { movieFull.genres.map( g => g.name ).join(', ') } </Text>
        </View>
      </View>

      {/* Casting */}
    </>
  )
}
