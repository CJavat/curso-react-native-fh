import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState, authReducer } from "./AuthReducer";
import cafeApi from "../api/cafeApi";
import { LoginData, LoginResponse, RegisterData, CreadoPor } from "../interfaces/appInterfaces";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: CreadoPor | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';

  signUp: ( registerData: RegisterData ) => void;
  signIn: ( loginData: LoginData ) => void;
  logOut: () => void;
  removeError: () => void;
}

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
}

export const AuthContext = createContext( {} as AuthContextProps );


export const AuthProvider = ( { children }: any ) => {
  const [state, dispatch] = useReducer( authReducer, authInitialState );

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    // No hay token
    if( !token ) return dispatch({ type: 'notAuthenticated' });

    // Token Existe
    const resp = await cafeApi.get("/auth");
    if( resp.status !== 200 ) return dispatch({ type: 'notAuthenticated' });

    await AsyncStorage.setItem('token', resp.data.token);
    dispatch({ 
      type: 'signUp', 
      payload: { 
        token: resp.data.token,
        user: resp.data.usuario,
      } 
    });
  };
  
  const signIn = async ( { correo, password }: LoginData ) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('/auth/login', { correo, password });

      dispatch({ 
        type: 'signUp', 
        payload: { 
          token: data.token,
          user: data.usuario,
        } 
      });

      await AsyncStorage.setItem('token', data.token);
    } catch ( error: any ) {
      console.log( error );
      dispatch({
        type: 'addError',
        payload: error.response.data.errors[0].msg || 'Revise la información',
      });
    }
  }

  const removeError = () => {
    dispatch({ type:'removeError' });
  }

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logout' });
  }

  const signUp = async ( { nombre, correo, password }: RegisterData ) => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/usuarios', { nombre, correo, password });
      
      dispatch({ 
        type: 'signUp', 
        payload: { 
          token: resp.data.token,
          user: resp.data.usuario,
        } 
      });

      await AsyncStorage.setItem('token', resp.data.token);
    } catch ( error: any ) {
      console.log( error.response.data );
      dispatch({
        type: 'addError',
        payload: error.response.data.errors[0].msg || 'Revise la información',
      });
    }
    
  }

  return (
    <AuthContext.Provider value={{
      ...state,
      
      signUp,
      signIn,
      logOut,
      removeError,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

