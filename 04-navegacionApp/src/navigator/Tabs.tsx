import React from 'react';
import { Platform, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';

import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';

import { colores } from '../themes/app.theme';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}


const BottomTabsANDROID = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <PaperProvider theme={{ colors: { primary: 'transparent', accent: 'transparent' } }}>
      <BottomTabsANDROID.Navigator
        sceneAnimationEnabled={ true }
        barStyle={{
          backgroundColor: colores.primary
        }}
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName: string;
            switch ( route.name ) {
              case 'Tab1Screen':
                iconName = 'home-outline';
              break;
  
              case 'Tab2Screen':
                iconName = 'extension-puzzle-outline';
              break;
  
              case 'StackNavigator':
                iconName = 'heart-half-outline';
              break;
            }
  
            return (
              <Text style={{ color }}>
                <Icon name={iconName!} size={20} color="#FFF" />
              </Text>
            )
          }
        })}
        >
        <BottomTabsIOS.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={ Tab1Screen } />
        <BottomTabsIOS.Screen name="Tab2Screen" options={{ title: "Tab1" }} component={ TopTabNavigator } />
        <BottomTabsIOS.Screen name="StackNavigator"  options={{ title: "Tab1" }} component={ StackNavigator } />
      </BottomTabsANDROID.Navigator>
    </PaperProvider>
  );
}






const BottomTabsIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator
      screenOptions={ ({route}) => ({ 
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          // backgroundColor: '#694fad',
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        // headerTintColor: 'green'
        headerStyle: {
          backgroundColor: 'white'
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string;
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = 'T1';
            break;

            case 'Tab2Screen':
              iconName = 'T2';
            break;

            case 'StackNavigator':
              iconName = 'SN';
            break;
          }

          return <Text style={{ color }}>{ iconName! }</Text>
        }
      })}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      
      
      

    >
      <BottomTabsIOS.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={ Tab1Screen } />
      <BottomTabsIOS.Screen name="Tab2Screen" options={{ title: "Tab1" }} component={ TopTabNavigator } />
      <BottomTabsIOS.Screen name="StackNavigator"  options={{ title: "Tab1" }} component={ StackNavigator } />
    </BottomTabsIOS.Navigator>
  );
}