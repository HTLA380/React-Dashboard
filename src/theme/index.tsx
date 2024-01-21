import React, { useMemo } from "react";
import { palette } from "./palette";
import { typography } from "./typography";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import { overrides } from "./override";

interface ThemeProviderInterface {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderInterface> = ({
  children,
}) => {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
