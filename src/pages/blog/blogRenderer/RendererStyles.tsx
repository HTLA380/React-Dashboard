import { Box, Card, Typography, styled } from "@mui/material";
import avatarBgImg from "../../../assets/posts/shape-avatar.svg";

export const StyledCoverBox = styled(Box)<{ cover: string }>(({ cover }) => ({
  height: 360,
  borderRadius: 10,
  backgroundImage: `url(${cover})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  overflow: "hidden",
}));

export const StyledCard = styled(Card)({
  borderRadius: 3,
  boxShadow: "0 0 5px rgba(128, 128, 128, 0.1)",
  height: "100%",
});

export const StyledAvatarBg = styled(Box)({
  width: 80,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${avatarBgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "absolute",
  top: -20,
  left: 0,
});

export const StyledBlogTitle = styled(Typography)({
  fontSize: 15,
  fontWeight: 500,
  whiteSpace: "pre-line",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 2,
  textOverflow: "ellipsis",
});

export const StyledDate = styled(Typography)({
  fontSize: 12,
  fontWeight: 400,
  color: "rgb(145, 158, 171)",
  marginBottom: 2,
});
