import React from "react";
import { Add } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { posts } from "../../mock/blogData";
import BlogFilter from "./searchAndFilter/BlogFilter";
import OverlayBlog from "./blogRenderer/OverlayBlog";
import EachBlog from "./blogRenderer/EachBlog";
import BlogSearch from "./searchAndFilter/BlogSearch";
import { StyledStackRowBetween } from "../../components/Styles";

const Blog: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <StyledStackRowBetween marginBottom={4}>
        <Typography variant="h4">Blog</Typography>

        <Button startIcon={<Add />} variant="contained">
          New Post
        </Button>
      </StyledStackRowBetween>

      <StyledStackRowBetween marginBottom={5}>
        <BlogSearch />
        <BlogFilter />
      </StyledStackRowBetween>

      <Grid container spacing={3}>
        {posts.slice(0, 3).map((post, idx) => {
          return (
            <Grid
              key={post.id}
              item
              xs={12}
              sm={idx === 0 ? 12 : 6}
              md={idx === 0 ? 6 : 3}>
              <OverlayBlog post={post} isLatestPost={idx === 0} />
            </Grid>
          );
        })}

        {posts.slice(3).map((post) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={post.id}>
              <EachBlog post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Blog;
