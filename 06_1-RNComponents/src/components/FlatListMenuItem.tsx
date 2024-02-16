import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ( { menuItem }: Props ) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={ () => navigation.navigate( menuItem.component ) }
    > 
      <View style={ styles.container }>
        <Icon 
          name={ menuItem.icon }
          size={ 23 }
          color="#5856D6"
        />

        <Text style={ styles.itemText }>
          { menuItem.name }
        </Text>
        
        <View style={{ flex: 1 }} />

        <Icon 
          name="chevron-forward-outline"
          size={ 23 }
          color="#5856D6"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  
});