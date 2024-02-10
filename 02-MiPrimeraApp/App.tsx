import React from 'react'
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
// import { ContadorScreen } from './src/screens/ContadorScreen'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
import { SafeAreaView } from 'react-native'

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}
