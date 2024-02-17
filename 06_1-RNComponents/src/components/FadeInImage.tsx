import React, { useContext, useState } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, ActivityIndicatorComponent, Animated, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
}

export const FadeInImage = ( { uri }: Props ) => {

  const { theme: { colors } } = useContext( ThemeContext );

  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState( false );

  const finishLoading = () => {
    setIsLoading( false );
    fadeIn();
  };

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {
        isLoading && <ActivityIndicator style={{ position: 'absolute' }} color={ colors.primary } size={30} />
      }
      <Animated.Image
        source={{ uri }}
        onLoadEnd={ finishLoading }
        style={{
          width: '100%',
          height: 400,
          opacity,
        }}
      />
    </View>
  )
}
