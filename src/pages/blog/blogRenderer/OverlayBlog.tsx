import { Share, Sms, Visibility } from "@mui/icons-material";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { formatDate, formatNumber } from "../../../utils/helper";
import { StyledStackRow, StyledStackRowEnd } from "../../../components/Styles";

interface OverlayBlogInterface {
  post: {
    cover: string;
    author: { name: string; avatarUrl: string };
    createAt: Date;
    title: string;
    comment: number;
    view: number;
    share: number;
  };
  isLatestPost: boolean;
}

const OverlayBlog: React.FC<OverlayBlogInterface> = ({
  post,
  isLatestPost,
}) => {
  const { cover, author, createAt, title, comment, view, share } = post;

  const latestPostFontStyle = {
    fontSize: { xs: 16, sm: 20 },
    fontWeight: 700,
  };

  const otherPostFontStyle = {
    fontSize: 15,
    fontWeight: 500,
  };

  const renderCover = (
    <Box
      component={"img"}
      src={cover}
      sx={{
        width: 1,
        minHeight: 400,
        height: 1,
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );

  const renderAvatar = (
    <Avatar src={author.avatarUrl} alt={author.name}></Avatar>
  );

  const renderDate = (
    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 400,
        color: "text.disabled",
        marginBottom: 2,
      }}>
      {formatDate(createAt)}
    </Typography>
  );

  const renderTitle = (
    <Typography
      variant="subtitle1"
      color={"common.white"}
      marginTop={2}
      sx={{
        ...(isLatestPost ? latestPostFontStyle : otherPostFontStyle),
        whiteSpace: "pre-line",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        WebkitLineClamp: 2,
        textOverflow: "ellipsis",
        ":hover": {
          textDecoration: "underline",
        },
      }}>
      {title}
    </Typography>
  );

  const renderInfo = (
    <StyledStackRowEnd gap={1} flexWrap={"wrap"} marginTop={3}>
      {[
        {
          number: comment,
          icon: <Sms sx={{ fontSize: 16, color: "text.disabled" }} />,
        },
        {
          number: view,
          icon: <Visibility sx={{ fontSize: 16, color: "text.disabled" }} />,
        },
        {
          number: share,
          icon: <Share sx={{ fontSize: 16, color: "text.disabled" }} />,
        },
      ].map((item) => {
        return (
          <StyledStackRow gap={0.5} key={item.number}>
            {item.icon}
            <Typography fontSize={12} sx={{ color: "rgb(145, 158, 171)" }}>
              {formatNumber(item.number)}K
            </Typography>
          </StyledStackRow>
        );
      })}
    </StyledStackRowEnd>
  );

  return (
    <Card sx={{ height: 1 }}>
      {renderCover}

      <Stack
        sx={{
          width: 1,
          height: 1,
          backgroundColor: "#161c24b8",
          padding: "1.5rem",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        justifyContent={"space-between"}>
        {renderAvatar}

        <Box>
          {renderDate}

          {renderTitle}

          {renderInfo}
        </Box>
      </Stack>
    </Card>
  );
};

export default OverlayBlog;
