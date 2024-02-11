import React from 'react';

import { DrawerContentComponentProps, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/app.theme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator 
      drawerContent={
        ( props ) => <MenuInterno { ...props } />
      }
      screenOptions={{
        drawerType: `${ width >= 768 ? 'permanent' : 'front' }`,
        // headerShown: false,
        // headerTransparent: true
      }} 
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://www.shutterstock.com/image-vector/boy-default-placeholder-children-avatar-260nw-369833402.jpg'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Opciones del menú */}
      <View style={ styles.menuContainer } >
        <TouchableOpacity 
          onPress={ () => navigation.navigate('Tabs') }
          style={ styles.menuBoton } 
        >
          <Text style={ styles.menuTexto } >Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={ () => navigation.navigate('SettingsScreen') }
          style={ styles.menuBoton } 
        >
          <Text style={ styles.menuTexto } >Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}