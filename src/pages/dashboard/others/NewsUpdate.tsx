import React from "react";
import { StyledCard } from "../../../components/Styles";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { newsData } from "../data";
import { ChevronRight } from "@mui/icons-material";

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
    <Stack flexDirection={"row"} alignItems={"center"} gap={2} marginBottom={3}>
      <Box
        component="img"
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
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: { xs: "10rem", sm: "30rem", lg: "100%" },
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
    </Stack>
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
      <Stack
        justifyContent={"end"}
        width={"100%"}
        flexDirection={"row"}
        padding={1}>
        <Button
          sx={{
            color: "#212b36",
            fontSize: 14,
            textTransform: "none",
            fontWeight: "bold",
            ":hover": { backgroundColor: "primary.main" },
          }}>
          View All
          <ChevronRight />
        </Button>
      </Stack>
    </StyledCard>
  );
};

export default NewsUpdate;
