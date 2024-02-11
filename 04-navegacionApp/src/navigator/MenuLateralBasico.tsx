import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      screenOptions={ ({route}) => ({
        drawerType: `${ width >= 768 ? 'permanent' : 'front' }`,
        headerShown: false,
        headerTransparent: true,
        drawerIcon: ({color, focused, size}) => {
          let iconName: string;
          switch ( route.name ) {
            case 'StackNavigator':
              iconName = 'home-outline';
            break;

            case 'SettingsScreen':
              iconName = 'extension-puzzle-outline';
            break;
          }

          return (
            <Text style={{ color }}>
              <Icon name={iconName!} size={20} color="red" />
            </Text>
          )
        }
      })} 
    >
      <Drawer.Screen name="StackNavigator" options={{ title: "Home" }} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: "Settings" }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}