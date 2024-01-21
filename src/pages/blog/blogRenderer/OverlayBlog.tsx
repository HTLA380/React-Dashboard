import { Share, Sms, Visibility } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { formatDate, formatNumber } from "../../../utils/helper";
import { StyledStackRow, StyledStackRowEnd } from "../../../components/Styles";
import { StyledCoverBox, StyledDate } from "./RendererStyles";

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

interface OverlayBlogInterface {
  cover: string;
  avatar: string;
  username: string;
  createAt: Date;
  title: string;
  comment: number;
  view: number;
  share: number;
}

const OverlayBlog: React.FC<OverlayBlogInterface> = ({
  cover,
  avatar,
  username,
  createAt,
  title,
  comment,
  view,
  share,
}) => {
  return (
    <StyledCoverBox cover={cover}>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#161c24b8",
          padding: "1.5rem",
        }}
        justifyContent={"space-between"}>
        <Avatar src={avatar} alt={username}></Avatar>

        <Box>
          <StyledDate>{formatDate(createAt)}</StyledDate>
          <Typography
            variant="h3"
            color={"primary"}
            fontSize={"inherit"}
            fontWeight={"inherit"}>
            {title}
          </Typography>

          <StyledStackRowEnd gap={1} marginTop={3} flexWrap={"wrap"}>
            <IconCountRow
              icon={<Sms sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />}
              count={comment}
            />
            <IconCountRow
              icon={
                <Visibility
                  sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }}
                />
              }
              count={view}
            />
            <IconCountRow
              icon={
                <Share sx={{ fontSize: 16, color: "rgb(145, 158, 171)" }} />
              }
              count={share}
            />
          </StyledStackRowEnd>
        </Box>
      </Stack>
    </StyledCoverBox>
  );
};

export default OverlayBlog;
