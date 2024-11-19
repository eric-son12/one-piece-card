import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "black",
    },
  },
  palette: {
    primary: {
      main: "#928157", // Customize your primary color
    },
    secondary: {
      main: "#000020", // Customize your secondary color
    },
  },
});

export default theme;
