import { AppBar, Avatar, Fab, Stack, styled } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

const StyledAppBar = styled(AppBar)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  boxShadow: "none",
  padding: "1rem 2rem",
});

const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
});

const StyledIcon = styled(Fab)({
  color: grey[600],
  boxShadow: "none",
  width: 40,
  height: 40,
  background: "transparent",
  ":hover": {
    backgroundColor: grey[300],
  },
});

const StyledAvatar = styled(Avatar)({
  backgroundColor: blue[400],
  width: 30,
  height: 30,
  fontSize: 10,
  marginLeft: 1,
});

export { StyledAppBar, StyledStack, StyledIcon, StyledAvatar };
