import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import Icon from "react-native-vector-icons/Ionicons";
import { ContactsScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/app.theme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {
  
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string;
          switch ( route.name ) {
            case 'Chat':
              iconName = 'chatbox-outline';
            break;

            case 'Contacts':
              iconName = 'people-outline';
            break;

            case 'Albums':
              iconName = 'albums-outline';
            break;
          }

          return (
            <Text style={{ color }}>
              <Icon name={iconName!} size={20} color={colores.primary} />
            </Text>
          )
        }
      })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}