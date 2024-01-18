import { Button, Card, Stack, styled } from "@mui/material";

export const StyledCard = styled(Card)({
  padding: 0,
  width: "100%",
  boxShadow: "0 0 1rem rgba(0, 0, 0, 0.055)",
  backgroundColor: "#fff",
  borderRadius: 10,
});

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

export const StyledDeepBlueBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  textTransform: "capitalize",
  borderRadius: 5,
  ":hover": {
    backgroundColor: theme.palette.primary.contrastText,
  },
  padding: "0.5rem 1rem",
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  color: "#212b36",
  fontSize: 14,
  textTransform: "none",
  fontWeight: "bold",
  ":hover": { backgroundColor: theme.palette.primary.main },
}));
