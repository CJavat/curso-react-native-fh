import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ProductsContext } from '../context/ProductsContext'
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ProductsScreen = () => {
  
  const { products, loadProducts } = useContext( ProductsContext );
  
  //TODO: pull to refresh

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList 
        data={ products }
        keyExtractor={ ( product ) => product._id }
        renderItem={ ({item}) => (
          <TouchableOpacity
            activeOpacity={ 0.8 }
            // onPress={  }
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