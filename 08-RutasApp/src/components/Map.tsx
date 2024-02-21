import React, { useEffect, useRef, useState } from 'react'

import MapView, { Marker, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { Fab } from './Fab';

interface Props {
  markers?: typeof Marker[];
}

export const Map = ( { markers }: Props ) => {
  
  const { 
    hasLocation, 
    initialPosition, 
    userLocation,
    routeLines,
    getCurrentLocation, 
    followUserLocation, 
    stopFollowUserLocation 
  } = useLocation();
  
  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);
  const [showPolyline, setShowPolyline] = useState( true );

  useEffect(() => {
    followUserLocation();

    return () => {
      stopFollowUserLocation();
    }
  }, []);

  useEffect(() => {
    if( !following.current ) return;

    const { latitude, longitude } = userLocation;
    
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    })
  }, [userLocation])
  
  

  const centerPosition = async () => {
    const { latitude, longitude } = await getCurrentLocation();
    
    following.current = true;
    
    mapViewRef.current?.animateCamera({
      center: { latitude, longitude },
    });
  }
  
  if( !hasLocation ) return <LoadingScreen />;

  return (
    <>
      <MapView
        ref={ ( element ) => mapViewRef.current = element! }
        showsUserLocation={ true }
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
        onTouchStart={ () => following.current = false }
      >

        {/* AGREGAR LÍNEAS PARA TRAZAR LA RUTA */}
        {
          showPolyline && (
            <Polyline 
              coordinates={ routeLines }
              strokeColor='black'
              strokeWidth={ 3 }
            />
          )
        }
        
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

      <Fab 
        iconName='compass-outline' 
        onPress={ centerPosition } 
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }} 
      />

      <Fab 
        iconName='brush-outline' 
        onPress={ () => setShowPolyline( !showPolyline ) } 
        style={{
          position: 'absolute',
          bottom: 80,
          right: 10,
        }} 
      />

    </>
  )
}
