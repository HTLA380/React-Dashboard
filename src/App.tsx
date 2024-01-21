import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useNavbarContext } from "./hooks/navbarContext";
import { ThemeProvider } from "./theme";

const App: React.FC = () => {
  const content = useRoutes(routes);
  const { DRAWER_WIDTH } = useNavbarContext();

  return (
    <ThemeProvider>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          overflow: "hidden",
        }}>
        <Navbar />
        <SideBar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 12,
            width: { lg: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}>
          {content}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
