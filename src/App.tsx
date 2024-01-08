import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import SideBar from "./components/sidebar/SideBar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useNavbarContext } from "./hooks/navbarContext";

const App: React.FC = () => {
  const content = useRoutes(routes);
  const { DRAWER_WIDTH } = useNavbarContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "primary.main",
        }}>
        <Navbar />
        <SideBar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { lg: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}>
          {content}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
