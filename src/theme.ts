import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[100],
    },
    secondary: {
      main: "#919eab",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h4" },
          style: {
            fontWeight: 600,
            fontSize: "1.6rem",
            color: "#212b36",
          },
        },
        {
          props: { variant: "h5" },
          style: {
            fontWeight: 600,
            fontSize: "1.15rem",
            color: "#212b36",
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontWeight: 500,
            fontSize: "0.9rem",
          },
        },
        {
          props: { variant: "body1" },
          style: {
            fontWeight: 500,
            fontSize: "0.92rem",
          },
        },
        {
          props: { variant: "body2" },
          style: {
            fontWeight: 400,
            fontSize: "0.9rem",
          },
        },
      ],
    },
  },
});
