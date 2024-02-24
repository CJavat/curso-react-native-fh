import React, { useContext, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';


interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'>{};

export const ProductsScreen = ( { navigation }: Props ) => {
  
  const { products, loadProducts } = useContext( ProductsContext );
  const [refreshing, setRefreshing] = useState( false );

  useEffect(() => { 
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          activeOpacity={ 0.8 }
          style={{ marginRight: 20 }}
          onPress={ () => navigation.navigate('ProductScreen', {})}
        >
          <Text style={{ color: 'black' }}>Agregar</Text>
        </TouchableOpacity>
      )
    });
  }, [])
  
  const loadProductsFromBackend = async () => {
    setRefreshing( true );
    await loadProducts();
    setRefreshing( false );
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList 
        refreshControl={
          <RefreshControl 
            refreshing={ refreshing }
            onRefresh={ loadProductsFromBackend }
            colors={['red', 'green', 'blue']}
          />
        }
        data={ products }
        keyExtractor={ ( product ) => product._id.toString() }
        renderItem={ ({item}) => (
          <TouchableOpacity
            activeOpacity={ 0.8 }
            onPress={ () => navigation.navigate('ProductScreen', {
              id: item._id,
              name: item.nombre,
            }) }
          >
            <Text style={ styles.productName }>{ item.nombre }</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={ styles.itemSeparator } />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productName: {
    color: 'black',
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginVertical: 5
  }
});