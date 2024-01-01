import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import SideBar from "./components/sidebar/SideBar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

const drawerWidth = 280;

const App: React.FC = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          backgroundColor: "primary.main",
          minHeight: "100vh",
        }}>
        <Navbar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}>
          {content}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
