import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/SideBar";
import { Box, Stack, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";

const App: React.FC = () => {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <header></header>
        <Stack direction={"row"}>
          <SideBar />
          <Box position={"relative"} width={"100%"}>
            <Navbar />
            {content}
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
