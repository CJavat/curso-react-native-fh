import React from 'react'

import MapView, { Marker } from 'react-native-maps';

interface Props {
  markers?: typeof Marker[];
}

export const Map = ( { markers }: Props ) => {
  return (
    <MapView
    showsUserLocation={ true }
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      style={{ flex: 1 }}
    >

      {/* AGREGAR UN MARCADOR PERSONALIZADO */}
      {/* <Marker
        image={ require('../assets/custommarker-220620-125219.png') }
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title="Esto es un título"
        description='Esto es una descripción'
      /> */}
    </MapView>
  )
}
