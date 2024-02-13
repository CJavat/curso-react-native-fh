import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir cómo luce, qué información tendré aquí
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y qué expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavoriteIcon: ( iconName: string ) => void;
  changeUsername: ( username: string ) => void;
}

// Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps );

// Componente que es el proveedor del estado
export const AuthProvider = ( { children }: any ) => {

  const [ authState, dispatch ] = useReducer( authReducer, authInitialState );

  const signIn = () => {
    dispatch( { type:'signIn' } );
  }

  const logout = () => {
    dispatch( { type:'logout' } );
  }

  const changeFavoriteIcon = ( iconName: string ) => {
    dispatch({
      type: 'changeFavIcon',
      payload: iconName
    });

  }
  const changeUsername = ( username: string ) => {
    dispatch({
      type: 'changeUsername',
      payload: username
    });
  }

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      changeFavoriteIcon,
      changeUsername
    }}>
      { children }
    </AuthContext.Provider>
  );
}