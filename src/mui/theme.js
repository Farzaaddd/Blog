import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: `"cursive", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },

  palette: {
    primary: {
      main: "#4D194D",
    },

    // secondary: {
    //   main: teal[400],
    // },

    grey: {
      main: "#616161",
    },

    secondary: {
      main: "#006466",
    },
  },
});

export default theme;
