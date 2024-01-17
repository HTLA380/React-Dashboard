import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { formatDate, formatNumber } from "./helper";
import { Share, Sms, Visibility } from "@mui/icons-material";
import avatarBgImg from "../../assets/posts/shape-avatar.svg";

interface EachBlogInterface {
  coverImg: string;
  avatar: string;
  createAt: Date;
  title: string;
  comment: number;
  view: number;
  share: number;
}

const EachBlog: React.FC<EachBlogInterface> = ({
  coverImg,
  avatar,
  createAt,
  title,
  comment,
  view,
  share,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 0 5px rgba(128, 128, 128, 0.1)",
        height: "100%",
      }}>
      <CardMedia component="img" image={coverImg} alt="Paella dish" />
      <CardContent sx={{ position: "relative", padding: "2rem 1.5rem" }}>
        <Box
          sx={{
            backgroundImage: `url(${avatarBgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 36,
            width: 80,
            zIndex: 10,
            position: "absolute",
            top: -20,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Avatar sx={{ marginTop: 1, width: 30, height: 30 }} src={avatar} />
        </Box>
        <Typography
          fontSize={12}
          sx={{ color: "rgb(145, 158, 171)", fontWeight: 400 }}
          marginBottom={2}>
          {formatDate(createAt)}
        </Typography>
        <Typography
          variant="h5"
          fontSize={15}
          fontWeight={500}
          sx={{
            whiteSpace: "pre-line",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
          }}>
          {title}
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          marginTop={4}
          gap={1}
          flexWrap={"wrap"}>
          <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
            <Sms sx={{ fontSize: 18, color: "rgb(145, 158, 171)" }} />
            <Typography fontSize={12} sx={{ color: "rgb(145, 158, 171)" }}>
              {formatNumber(comment)}K
            </Typography>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
            <Visibility sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />
            <Typography fontSize={12} sx={{ color: "rgb(145, 158, 171)" }}>
              {formatNumber(view)}K
            </Typography>
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} gap={0.5}>
            <Share sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />
            <Typography fontSize={12} sx={{ color: "rgb(145, 158, 171)" }}>
              {formatNumber(share)}K
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EachBlog;
