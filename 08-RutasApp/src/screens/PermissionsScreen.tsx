import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {
  const { permissions, askLocationPermission } = useContext( PermissionContext );
  

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Es necesario activar la ubicación para usar ésta aplicación</Text>

      <BlackButton 
        title='Permiso'
        onPress={ askLocationPermission }
      />

      <Text style={{ color: 'black' }}>
        { JSON.stringify( permissions, null, 3 ) }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: 'black',
    width: 150,
    fontSize: 16,
  }
});