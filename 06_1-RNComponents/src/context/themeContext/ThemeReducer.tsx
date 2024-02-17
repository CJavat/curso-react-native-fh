import { Theme } from "@react-navigation/native"

type ThemeAction =
  | { type: 'set_light_theme' }
  | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dividerColor: "rgba(0,0,0,0.7)",
  dark: false,
  colors: {
    primary: "red",
    background: "white",
    card: "green",
    text: "pink",
    border: "orange",
    notification: "teal"
  }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {

  switch (action.type) {
    case "set_light_theme":
      return { ...lightTheme }

    // case "set_dark_theme":
    //   return {
    //   ...state,
    //     currentTheme: "dark"
    //   }
    default:
      return state;
  }
}