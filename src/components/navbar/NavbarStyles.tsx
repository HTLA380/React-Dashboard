import { AppBar, Box, Drawer, alpha, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)<{ DRAWER_WIDTH: number }>(
  ({ theme, DRAWER_WIDTH }) => ({
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: `${DRAWER_WIDTH}px`,
    },
    boxShadow: "none",
    backgroundColor: alpha(theme.palette.background.default, 0.5),
    backdropFilter: "blur(10px)",
  })
);

export const StyledSearchBar = styled(Drawer)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  padding: "1rem 2rem",
  zIndex: 9999,
  backgroundColor: "#f0f0f0",
  transition: "0.3s ease-in-out",
});

export const StyledNotificationContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 350,
  height: 400,
  overflowY: "scroll",
  [theme.breakpoints.up("md")]: {
    width: 350,
    maxWidth: "none",
    height: "fit-content",
  },
  padding: "1rem 0 0",
  "&::-webkit-scrollbar": {
    width: "0.6rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(178, 182, 196)",
    borderRadius: "100vmax",
  },
}));
