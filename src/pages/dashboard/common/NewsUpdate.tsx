import React from "react";
import { StyledStackRow, StyledStackRowEnd } from "../../../components/Styles";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { grey } from "../../../theme/palette";
import { formatDate } from "../../../utils/helper";

interface NewsUpdateInterface {
  title: string;
  lists: {
    id: string;
    title: string;
    description: string;
    image: string;
    date: Date;
  }[];
}

const NewsUpdate: React.FC<NewsUpdateInterface> = ({ lists, title }) => {
  return (
    <Card>
      <CardHeader margin={3} title={title} />

      <Box sx={{ padding: "0 1.25rem 1.25rem", overflow: "hidden" }}>
        {lists.map((data) => (
          <RenderNews key={data.title} list={data} />
        ))}
      </Box>

      <Divider />

      <StyledStackRowEnd padding={1}>
        <Button
          sx={{
            color: "text.primary",
            backgroundColor: "common.white",
            ":hover": {
              color: "text.primary",
              backgroundColor: grey[300],
            },
          }}
          endIcon={<ChevronRight />}>
          View All
        </Button>
      </StyledStackRowEnd>
    </Card>
  );
};

interface RenderNewsInterface {
  list: { title: string; image: string; description: string; date: Date };
}

const RenderNews: React.FC<RenderNewsInterface> = ({ list }) => {
  const { title, image, description, date } = list;
  return (
    <StyledStackRow gap={2} marginTop={3} maxWidth={"80vw"}>
      <Box
        component={"img"}
        sx={{
          height: 50,
          width: 50,
          objectFit: "cover",
          borderRadius: 2,
        }}
        alt="avatar"
        src={image}
      />

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
        {formatDate(date)}
      </Typography>
    </StyledStackRow>
  );
};

export default NewsUpdate;
