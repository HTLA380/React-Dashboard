import { Stack, styled } from "@mui/material";

export const StyledStackRow = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledStackRowBetween = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const StyledStackRowEnd = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
});
