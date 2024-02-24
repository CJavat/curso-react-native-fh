import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'
import SplashScreen from 'react-native-splash-screen'



export const CalculadoraScreen = () => {

  const {
    numeroAnterior,
    numero,
    limpiar,
    armarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    Sumar,
    calcular,
  } = useCalculadora();

  // useEffect(() => {
    // SplashScreen.hide(); //TODO: No funciona
  // }, [])
  

  return (
    <View style={ styles.calculadoraContainer } >
      {
        ( numeroAnterior !== '0' ) && (<Text style={ styles.resultadoPequeño } >{ numeroAnterior }</Text>)
      }
      
      <Text 
        style={ styles.resultado } 
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { numero }
      </Text>

        {/* Fila de botones */}
      <View style={ styles.file} >
        <BotonCalc texto="C" color="#9B9B9B" action={ limpiar } />
        <BotonCalc texto="+/-" color="#9B9B9B" action={ positivoNegativo } />
        <BotonCalc texto="del" color="#9B9B9B" action={ btnDelete } />
        <BotonCalc texto="/" color="#FF9427" action={ btnDividir } />
      </View>

      <View style={ styles.file} >
        <BotonCalc texto="7" action={ armarNumero } />
        <BotonCalc texto="8" action={ armarNumero } />
        <BotonCalc texto="9" action={ armarNumero } />
        <BotonCalc texto="X" color="#FF9427" action={ btnMultiplicar } />
      </View>

      <View style={ styles.file} >
        <BotonCalc texto="4" action={ armarNumero } />
        <BotonCalc texto="5" action={ armarNumero } />
        <BotonCalc texto="6" action={ armarNumero } />
        <BotonCalc texto="-" color="#FF9427" action={ btnRestar } />
      </View>

      <View style={ styles.file} >
        <BotonCalc texto="1" action={ armarNumero } />
        <BotonCalc texto="2" action={ armarNumero } />
        <BotonCalc texto="3" action={ armarNumero } />
        <BotonCalc texto="+" color="#FF9427" action={ Sumar } />
      </View>
      
      <View style={ styles.file} >
        <BotonCalc texto="0" ancho action={ armarNumero } />
        <BotonCalc texto="." action={ armarNumero } />
        <BotonCalc texto="=" color="#FF9427" action={ calcular } />
      </View>

      

    </View>
  )
}
