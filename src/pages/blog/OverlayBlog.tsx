import { Share, Sms, Visibility } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { formatDate, formatNumber } from "./helper";

interface OverlayBlogInterface {
  cover: string;
  avatar: string;
  createAt: Date;
  title: string;
  comment: number;
  view: number;
  share: number;
}

const OverlayBlog: React.FC<OverlayBlogInterface> = ({
  cover,
  avatar,
  createAt,
  title,
  comment,
  view,
  share,
}) => {
  return (
    <Box
      sx={{
        height: 360,
        borderRadius: 4,
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#161c24b8",
          padding: "1.5rem",
        }}
        justifyContent={"space-between"}>
        <Avatar src={avatar}></Avatar>

        <Box>
          <Typography
            fontSize={12}
            sx={{ color: "rgb(145, 158, 171)" }}
            marginBottom={2}>
            {formatDate(createAt)}
          </Typography>
          <Typography
            variant="h3"
            color={"primary"}
            fontSize={"inherit"}
            fontWeight={"inherit"}>
            {title}
          </Typography>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
            gap={1}
            marginTop={3}
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
        </Box>
      </Stack>
    </Box>
  );
};

export default OverlayBlog;
