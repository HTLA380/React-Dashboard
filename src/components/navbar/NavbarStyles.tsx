import { Fab, Stack, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

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

const StyledText = styled(Typography)({
  fontSize: 14,
  fontWeight: "500",
});

export { StyledStack, StyledIcon, StyledText };
