import { AuthState } from "./AuthContext";

type AuthAction = 
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'changeUsername', payload: string };

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

  switch( action.type ) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet'
      }
    
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined
      }

    case 'changeUsername':
      return {
        ...state,
        userName: action.payload
      }

    default:
      return state;

  }




}