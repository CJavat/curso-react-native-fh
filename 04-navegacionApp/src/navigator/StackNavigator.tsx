import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: { id: number, nombre: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  
  return (
    <Stack.Navigator
      // initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle: { // Quitar línea del header
          elevation: 0, // ANDROID
          shadowColor: 'transparent', // IOS
        },
        cardStyle: {
          backgroundColor: "#FFF"
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{ title: "Página 1", headerShown: false, }} component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" options={{ title: "Página 2", headerShown: false, }} component={ Pagina2Screen } />
      <Stack.Screen name="Pagina3Screen" options={{ title: "Página 3", headerShown: false, }} component={ Pagina3Screen } />
      <Stack.Screen name="PersonaScreen" options={{ title: "Persona", headerShown: false, }} component={ PersonaScreen } />
    </Stack.Navigator>
  );
}