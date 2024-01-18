import * as React from "react";
import { Close, Search } from "@mui/icons-material";
import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { StyledStackRow } from "../Styles";
import { StyledSearchBar } from "./NavbarStyles";

const SearchBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <Search />
      </IconButton>

      <StyledSearchBar elevation={3} sx={{ top: open ? 0 : -200 }}>
        <Container maxWidth="xl">
          <StyledStackRow>
            <Search sx={{ color: grey[600] }} />
            <TextField
              placeholder="Search..."
              variant="standard"
              sx={{ margin: "0 3rem 0 .5rem" }}
              color="secondary"
              fullWidth
            />

            <Button variant="contained" color="info" sx={{ marginRight: 2 }}>
              Search
            </Button>

            <IconButton aria-label="close" onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </StyledStackRow>
        </Container>
      </StyledSearchBar>
    </Box>
  );
};

export default SearchBar;
