import React, { useContext, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfinitiScrollScreen = () => {

  const [numbers, setNumbers] = useState([1,2,3,4,5]);
  const { theme: { colors } } = useContext( ThemeContext );

  const lowMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + 1;
    }

    setTimeout(() => {
      setNumbers([ ...numbers, ...newArray ]);
    }, 1500);
  }

  const renderItem = ( item: number ) => {
    return (
      // <Image 
      //   source={{ uri: `https://picsum.photos/id/${ item }/500/400` }}
      //   style={{
      //     width: '100%',
      //     height: 400,
      //   }}
      // />
      <FadeInImage 
        uri={`https://picsum.photos/id/${ item }/500/400`}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* <HeaderTitle title='InfinitiScrollScreen' /> */}

      <FlatList 
        data={ numbers }
        keyExtractor={ (item, index) => item.toString() + index }
        renderItem={ ({ item }) => renderItem( item ) }

        ListHeaderComponent={ <HeaderTitle title='InfinitiScrollScreen' /> }

        onEndReached={ lowMore }
        onEndReachedThreshold={ 0.5 }

        // ListFooterComponent={ <ActivityIndicator size={ 20 } color="white" /> }
        ListFooterComponent={ () => (
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <ActivityIndicator size={ 50 } color="#5856D6" />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    textItem: {
      height: 200,
    }
});