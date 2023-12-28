import * as React from "react";
import { StyledIcon, StyledStack } from "./NavbarStyles";
import { Close, Search } from "@mui/icons-material";
import { Box, Button, Paper, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

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

export default function SearchComponents() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <StyledIcon onClick={() => setOpen(true)}>
        <Search />
      </StyledIcon>
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
        <StyledIcon
          aria-label="close"
          onClick={() => setOpen(false)}
          size="small"
          sx={{ position: "absolute", top: 15, right: 20 }}>
          <Close />
        </StyledIcon>
      </StyledDrawer>
    </Box>
  );
}
