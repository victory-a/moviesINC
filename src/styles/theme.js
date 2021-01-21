import { DefaultTheme} from "react-native-paper";

export const colors = {
  primary: "#694fad",
  red: "#C22929",
  yellow: "#CC8B09",
  white: "#fff"
}

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    ...colors
  }
};

export default theme;