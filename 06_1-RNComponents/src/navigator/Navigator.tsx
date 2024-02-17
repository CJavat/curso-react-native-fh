import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { InfinitiScrollScreen } from '../screens/InfinitiScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createStackNavigator();

export const Navigator = () => {
  
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={ theme }
    >
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={ HomeScreen } />
        <Stack.Screen name="Animation101Screen" component={ Animation101Screen } />
        <Stack.Screen name="Animation102Screen" component={ Animation102Screen } />
        <Stack.Screen name="SwitchScreen" component={ SwitchScreen } />
        <Stack.Screen name="AlertScreen" component={ AlertScreen } />
        <Stack.Screen name="TextInputScreen" component={ TextInputScreen } />
        <Stack.Screen name="InfinitiScrollScreen" component={ InfinitiScrollScreen } />
        <Stack.Screen name="SlidesScreen" component={ SlidesScreen } />
        <Stack.Screen name="ChangeThemeScreen" component={ ChangeThemeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}