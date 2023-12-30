import * as React from "react";
import { Close, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
});

const StyledDrawer = styled(Paper)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  padding: "2rem 5rem",
  zIndex: 9999,
  backgroundColor: "#e9e9e9",
  transition: "0.3s ease-in-out",
});

const SearchBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <IconButton onClick={() => setOpen(true)}>
        <Search />
      </IconButton>
      <StyledDrawer elevation={3} sx={{ top: open ? 0 : -200 }}>
        <StyledStack>
          <Search sx={{ color: grey[600] }} />
          <TextField
            id="standard-basic"
            placeholder="Search..."
            variant="standard"
            sx={{ margin: "0 3rem 0 .5rem" }}
            color="secondary"
            fullWidth
          />
          <Button variant="contained" color="info" sx={{ marginRight: 2 }}>
            Search
          </Button>
        </StyledStack>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", top: 15, right: 20 }}>
          <Close />
        </IconButton>
      </StyledDrawer>
    </Box>
  );
};

export default SearchBar;
