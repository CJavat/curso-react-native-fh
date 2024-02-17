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
    primary: "#084F6A",
    background: "white",
    card: "white",
    text: "black",
    border: "black",
    notification: "teal"
  }
}

export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dividerColor: "rgba(255,255,255,0.5)",
  dark: false,
  colors: {
    primary: "#75CEDB",
    background: "black",
    card: "black",
    text: "white",
    border: "white",
    notification: "teal"
  }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction ): ThemeState => {

  switch (action.type) {
    case "set_light_theme":
      return { ...lightTheme }

    case "set_dark_theme":
      return { ...darkTheme }
    default:
      return state;
  }
}