import { Autocomplete, InputAdornment, Paper, TextField } from "@mui/material";
import React from "react";
import { posts } from "../BlogData";
import { Search } from "@mui/icons-material";

const BlogSearch: React.FC = () => {
  return (
    <Autocomplete
      fullWidth
      id="blog-search"
      freeSolo
      options={posts.map((post) => post.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search post..."
          color="info"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}
      PaperComponent={(props) => (
        <Paper
          sx={{
            "& .MuiAutocomplete-listbox .MuiAutocomplete-option": {
              fontSize: 14,
            },
          }}
          {...props}
        />
      )}
      sx={{
        maxWidth: 280,
      }}
    />
  );
};

export default BlogSearch;
