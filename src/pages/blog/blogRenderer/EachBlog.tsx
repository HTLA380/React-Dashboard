import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { formatDate, formatNumber } from "../../../utils/helper";
import { Share, Sms, Visibility } from "@mui/icons-material";
import { StyledStackRow, StyledStackRowEnd } from "../../../components/Styles";

interface EachBlogInterface {
  post: {
    cover: string;
    author: { name: string; avatarUrl: string };
    createAt: Date;
    title: string;
    comment: number;
    view: number;
    share: number;
  };
}

const EachBlog: React.FC<EachBlogInterface> = ({ post }) => {
  const { cover, author, createAt, title, comment, view, share } = post;

  const renderCover = (
    <CardMedia component="img" image={cover} alt={"cover"} loading="lazy" />
  );

  const renderAvatar = (
    <Box
      sx={{
        width: 80,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/assets/images/cover/shape-avatar.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        top: -20,
        left: 0,
      }}>
      <Avatar
        sx={{ marginTop: 1, width: 30, height: 30 }}
        src={author.avatarUrl}
        alt={author.name}
      />
    </Box>
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
      variant="subtitle2"
      sx={{
        fontSize: 15,
        fontWeight: 500,
        whiteSpace: "pre-line",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        WebkitLineClamp: 2,
        textOverflow: "ellipsis",
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
    <Card>
      {renderCover}

      <CardContent sx={{ position: "relative", padding: "2rem 1.5rem" }}>
        {renderAvatar}

        {renderDate}

        {renderTitle}

        {renderInfo}
      </CardContent>
    </Card>
  );
};

export default EachBlog;
