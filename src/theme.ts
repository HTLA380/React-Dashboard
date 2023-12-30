import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h6" } /* component props */,
          style: {
            fontWeight: "medium",
            fontSize: "0.92rem",
            display: "inline",
          },
        },
      ],
    },
  },
});
