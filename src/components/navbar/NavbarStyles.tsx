import { Fab, Stack, styled } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

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

const StyledAvatar = styled(Fab)({
  backgroundColor: blue[400],
  marginLeft: 4,
  boxShadow: "none",
  ":hover": {
    backgroundColor: blue[800],
  },
});

export { StyledStack, StyledIcon, StyledAvatar };
