import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1 } from './Tab1';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {
          marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10 ,
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.92 )',
          borderTopWidth: 0,
          elevation: 0,
          height: ( Platform.OS === 'ios' ) ? 0 : 60
        },
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={ Tab1 } 
        options={{
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" size={ 20 } color={ color } />
          )
        }}
      />
      
      <Tab.Screen 
        name="SearchScreen"  
        component={ Tab2Screen } 
        options={{
          tabBarLabel: "Búsqueda",
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" size={ 25 } color={ color } />
          )
        }}
      />
    </Tab.Navigator>
  );
}