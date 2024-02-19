import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { MapScreen } from '../screens/MapScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { PermissionContext } from '../context/PermissionsContext';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { permissions } = useContext( PermissionContext );

  if( permissions.locationStatus === 'unavailable' ) return <LoadingScreen />;

  return (
    <Stack.Navigator
      // initialRouteName='PermissionsScreen'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        } 
      }}
    >
      {
        ( permissions.locationStatus === 'granted' )
          ? <Stack.Screen name="MapScreen" component={ MapScreen } />
          : <Stack.Screen name="PermissionsScreen" component={ PermissionsScreen } />
      }
    </Stack.Navigator>
  );
}