import { createTheme } from "@mui/material/styles";

// NOTE: Change the colors accordingly.
const theme = createTheme({
  typography: {
    fontFamily: "Cormorant Garamond, Work Sans",
    fontSize: 18,
    fontWeightBold: 700,
    fontWeightRegular: 400,
  },
  palette: {
    bw: {
      white: "#FFFFFF",
      background: "#F5F5F5",
      line: "rgba(77, 77, 77, 0.3)",
      black: "#000000",
      title: "#2F2F2F",
      subTitle: "#000000",
      bodyText: "#808080",
      lightGray: "#545B6D",
      lightestGray: "#8F8F8F",
      lightBlack: "rgba(5, 5, 5, 0.5)",
    },
    primary: {
      main: "#332F2E",
    },
  },
  spacing: 2,
});

export default theme;
