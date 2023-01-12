import { createTheme } from "@mui/material/styles"

const green = "#007200"
const tan = "#FDFCDC"
const offBlack = "#000000"
const grey = "#54575A"
const white = "#ffffff"

const theme = createTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: grey,
    },
    common: {
      tan,
      offBlack,
      white,
    },
  },
  typography: {
    h1: {
      fontFamily: "Cabin",
      fontSize: "3.5rem",
      fontWeight: 700,
      color: grey,
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "1.5rem",
      fontWeight: 400,
      color: grey,
    },
    caption: {
      fontFamily: "Open Sans",
      fontSize: "1.5rem",
      fontWeight: 400,
      color: offBlack,
    },
    body1: {},
    subtitle1: {
      fontFamily: "Cabin",
      fontSize: "1.5rem",
      fontWeight: 500,
      color: white,
    },
  },
  components: {},
})

export default theme
