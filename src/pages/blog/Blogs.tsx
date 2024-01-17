import { Add } from "@mui/icons-material";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { posts } from "./BlogData";
import BlogSelector from "./BlogSelector";
import OverlayBlog from "./OverlayBlog";
import EachBlog from "./EachBlog";
import AutoCompleteInput from "./AutoCompleteInput";

const Blog: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={4}>
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

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={5}>
        <AutoCompleteInput />
        <BlogSelector />
      </Stack>

      <Grid container spacing={3}>
        {posts.slice(0, 3).map((post, idx) => {
          return (
            <Grid
              key={post.author.name}
              item
              xs={12}
              sm={idx === 0 ? 12 : 6}
              md={idx === 0 ? 6 : 3}
              fontSize={idx === 0 ? 20 : 15}
              fontWeight={idx === 0 ? "bold" : "500"}>
              <OverlayBlog
                cover={post.cover}
                title={post.title}
                createAt={post.createAt}
                avatar={post.author.avatarUrl}
                comment={post.comment}
                view={post.view}
                share={post.share}
              />
            </Grid>
          );
        })}
        {posts.slice(3).map((post) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={post.author.name}>
              <EachBlog
                coverImg={post.cover}
                avatar={post.author.avatarUrl}
                createAt={post.createAt}
                title={post.title}
                comment={post.comment}
                view={post.view}
                share={post.share}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Blog;
