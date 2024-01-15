import { Add } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Blog: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={5}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.4rem", sm: "1.6rem" },
          }}>
          Blog
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.contrastText",
            color: "primary.main",
            textTransform: "capitalize",
            py: 1,
            borderRadius: 2,
            ":hover": {
              backgroundColor: "primary.contrastText",
            },
          }}>
          <Add fontSize="small" />
          <Typography component={"span"} marginLeft={0.2}>
            New Post
          </Typography>
        </Button>
      </Stack>
    </Container>
  );
};

export default Blog;
