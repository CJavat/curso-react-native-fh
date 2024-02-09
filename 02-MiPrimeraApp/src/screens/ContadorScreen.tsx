import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Contador: { contador }
      </Text>

      <TouchableOpacity
        style={ styles.fabLocationBR }
        onPress={ () => setContador( contador + 1 ) }
      >
        <View style={ styles.fab }>
          <Text style={ styles.fabText }>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.fabLocationBL }
        onPress={ () => setContador( contador - 1 ) }
      >
        <View style={ styles.fab }>
          <Text style={ styles.fabText }>-1</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }

});
