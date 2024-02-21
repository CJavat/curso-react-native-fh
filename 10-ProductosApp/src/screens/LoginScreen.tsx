import React from 'react'
import { Background } from '../components/Background'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'


interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ( { navigation, route }: Props ) => {

  const { email, onChange, password } = useForm({
    email: '',
    password: ''
  });

  const onLogin = () => {
    Keyboard.dismiss();
    
    console.log({ email, password });
  };

  return (
    <>
      {/* Background */}
      <Background />

      <KeyboardAvoidingView 
        style={{ 
          flex: 1,
        }}
        behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
      >
        <View style={ loginStyles.formContainer }>
        {/* Keyboard avoid view */}
          <WhiteLogo />

          <Text style={ loginStyles.title }>Login</Text>

          <Text style={ loginStyles.label }>Email</Text>
          <TextInput
            placeholder='Ingrese su email'
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType='email-address'
            underlineColorAndroid="white"
            style={[ 
              loginStyles.inputField,
              ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
            ]}
            selectionColor="gray"

            onChangeText={ ( value ) => onChange( value, 'email' ) }
            value={ email }
            onSubmitEditing={ onLogin }

            autoCapitalize='none'
            autoCorrect={ false }
          />

          <Text style={ loginStyles.label }>Password:</Text>
          <TextInput
            placeholder='*******'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry // Para que se oculte el texto (***)
            style={[ 
              loginStyles.inputField,
              ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
            ]}
            selectionColor="gray"

            onChangeText={ ( value ) => onChange( value, 'password' ) }
            value={ password }
            onSubmitEditing={ onLogin }
          />

          {/* Botón Login */}
          <View style={ loginStyles.buttonContainer }>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              style={ loginStyles.button }
              onPress={ onLogin }
            >
              <Text style={ loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

            {/* Crear una neuva cuenta */}
            <View style={ loginStyles.newUserContainer }>
              <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ () => navigation.replace("RegisterScreen") }
              >
                <Text style={ loginStyles.buttonText }>Nueva Cuenta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
    </>
  )
}
