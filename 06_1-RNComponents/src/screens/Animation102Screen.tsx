import React, { useContext, useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const Animation102Screen = () => {
  const { theme: { colors } } = useContext( ThemeContext );

  const pan = useRef( new Animated.ValueXY() ).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], {
      useNativeDriver: false,
    }
    ),

    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {
          toValue: {
            x: 0, 
            y: 0
          }, 
          useNativeDriver: false
        },
      ).start();
    },
  });

  return (
    <View style={ styles.container }>
      
      <HeaderTitle title='Animation102Screen' />
      
      <Animated.View 
        { ...panResponder.panHandlers }
        style={[ pan.getLayout(), { ...styles.box, backgroundColor: colors.primary } ]} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
  }
});