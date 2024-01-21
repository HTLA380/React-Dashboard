import React from "react";
import {
  StyledBtn,
  StyledStackRow,
  StyledStackRowEnd,
} from "../../../components/Styles";
import { Box, Card, CardHeader, Divider, Typography } from "@mui/material";
import { newsData } from "../data";
import { ChevronRight } from "@mui/icons-material";
import { StyledImgContainer } from "./CommonStyles";

const NewsUpdate: React.FC = () => {
  return (
    <Card>
      <CardHeader margin={3} title="News Update" />

      <Box sx={{ padding: "0 1.25rem 1.25rem", overflow: "hidden" }}>
        {newsData.map((data) => (
          <RenderNews
            key={data.title}
            title={data.title}
            description={data.description}
            image={data.image}
            date={data.date}
          />
        ))}
      </Box>
      <Divider />
      <StyledStackRowEnd padding={1}>
        <StyledBtn endIcon={<ChevronRight />}>View All</StyledBtn>
      </StyledStackRowEnd>
    </Card>
  );
};

const RenderNews: React.FC<RenderNewsInterface> = ({
  title,
  image,
  description,
  date,
}) => {
  return (
    <StyledStackRow gap={2} marginTop={3} maxWidth={"80vw"}>
      <StyledImgContainer alt="avatar" src={image} />

      <Box
        sx={{
          textOverflow: "ellipsis",
          width: "48rem",
          overflow: "hidden",
        }}>
        <Typography
          color="inherit"
          variant="subtitle2"
          noWrap
          sx={{ ":hover": { textDecoration: "underline" } }}>
          {title}
        </Typography>
        <Typography
          noWrap
          color={"text.secondary"}
          variant="body2"
          sx={{ width: "100%" }}>
          {description}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontSize={13}
        color={"text.disabled"}
        whiteSpace={"nowrap"}>
        {date}
      </Typography>
    </StyledStackRow>
  );
};

interface RenderNewsInterface {
  title: string;
  image: string;
  description: string;
  date: string;
}

export default NewsUpdate;
