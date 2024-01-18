import { Avatar, Box, styled } from "@mui/material";

export const StyledImgContainer = styled(Avatar)({
  height: 50,
  width: 50,
  objectFit: "cover",
  borderRadius: 8,
});

export const StyledOverViewContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "top",
  gap: 3,
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
    padding: 5,
    "&:last-child": {
      paddingBottom: 5,
    },
  },
  padding: 4,
  "&:last-child": {
    paddingBottom: 4,
  },
}));
