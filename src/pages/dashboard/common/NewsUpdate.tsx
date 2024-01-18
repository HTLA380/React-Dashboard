import React from "react";
import {
  StyledBtn,
  StyledCard,
  StyledStackRow,
  StyledStackRowEnd,
} from "../../../components/Styles";
import { Box, Divider, Typography } from "@mui/material";
import { newsData } from "../data";
import { ChevronRight } from "@mui/icons-material";
import { StyledImgContainer } from "./CommonStyles";

interface RenderNewsInterface {
  title: string;
  image: string;
  description: string;
  date: string;
}

const RenderNews: React.FC<RenderNewsInterface> = ({
  title,
  image,
  description,
  date,
}) => {
  return (
    <StyledStackRow gap={2} marginBottom={3} maxWidth={"80vw"}>
      <StyledImgContainer alt="avatar" src={image} />

      <Box
        sx={{
          textOverflow: "ellipsis",
          width: "48rem",
          overflow: "hidden",
        }}>
        <Typography variant="body1">{title}</Typography>
        <Typography
          noWrap
          color={"secondary.dark"}
          variant="body2"
          sx={{ width: "100%" }}>
          {description}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        fontSize={13}
        color={"secondary.dark"}
        whiteSpace={"nowrap"}>
        {date}
      </Typography>
    </StyledStackRow>
  );
};

const NewsUpdate: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">News Update</Typography>
      </Box>

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
    </StyledCard>
  );
};

export default NewsUpdate;
