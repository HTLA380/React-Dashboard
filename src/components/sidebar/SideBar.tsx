import React from "react";
import { Box, Drawer } from "@mui/material";
import DrawerComponent from "./DrawerComponent";
import { useNavbarContext } from "../../hooks/navbarContext";

const SideBar: React.FC = () => {
  const { DRAWER_WIDTH, isSideBarActive, setIsSideBarActive } =
    useNavbarContext();

  return (
    <Box
      component="nav"
      sx={{ width: { lg: DRAWER_WIDTH }, flexShrink: { lg: 0 } }}>
      {/* ====================== Mobile Sidebar ====================== */}
      <Drawer
        variant="temporary"
        open={isSideBarActive}
        onClose={() => setIsSideBarActive((prev) => !prev)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}>
        <DrawerComponent setIsSidebarActive={setIsSideBarActive} />
      </Drawer>

      {/* ====================== Desktop Sidebar ====================== */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
        open>
        <DrawerComponent />
      </Drawer>
    </Box>
  );
};

export default SideBar;
