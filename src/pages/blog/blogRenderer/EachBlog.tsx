import { Avatar, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { formatDate, formatNumber } from "../../../utils/helper";
import { Share, Sms, Visibility } from "@mui/icons-material";
import { StyledStackRow, StyledStackRowEnd } from "../../../components/Styles";
import {
  StyledAvatarBg,
  StyledBlogTitle,
  StyledCard,
  StyledDate,
} from "./RendererStyles";

interface IconCountRowInterface {
  icon: React.ReactNode;
  count: number;
}

const IconCountRow: React.FC<IconCountRowInterface> = ({ icon, count }) => (
  <StyledStackRow gap={0.5}>
    {icon}
    <Typography fontSize={12} sx={{ color: "rgb(145, 158, 171)" }}>
      {formatNumber(count)}K
    </Typography>
  </StyledStackRow>
);

interface EachBlogInterface {
  coverImg: string;
  avatar: string;
  username: string;
  createAt: Date;
  title: string;
  comment: number;
  view: number;
  share: number;
}

const EachBlog: React.FC<EachBlogInterface> = ({
  coverImg,
  avatar,
  username,
  createAt,
  title,
  comment,
  view,
  share,
}) => {
  return (
    <StyledCard>
      <CardMedia component="img" image={coverImg} alt={username} />
      <CardContent sx={{ position: "relative", padding: "2rem 1.5rem" }}>
        <StyledAvatarBg>
          <Avatar sx={{ marginTop: 1, width: 30, height: 30 }} src={avatar} />
        </StyledAvatarBg>
        <StyledDate>{formatDate(createAt)}</StyledDate>
        <StyledBlogTitle variant="h5">{title}</StyledBlogTitle>
        <StyledStackRowEnd marginTop={4} gap={1} flexWrap={"wrap"}>
          <IconCountRow
            icon={<Sms sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />}
            count={comment}
          />
          <IconCountRow
            icon={
              <Visibility sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />
            }
            count={view}
          />
          <IconCountRow
            icon={<Share sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />}
            count={share}
          />
        </StyledStackRowEnd>
      </CardContent>
    </StyledCard>
  );
};

export default EachBlog;
