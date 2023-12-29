import React from "react";
import PopoverEl from "../../utils/PopoverEl";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { StyledAvatar } from "./NavbarStyles";

const style = {
  width: 180,
  bgcolor: "background.paper",
};

const User: React.FC = () => {
  return (
    <PopoverEl
      margin=".5rem 0 0 0"
      Btn={<StyledAvatar size="small">J</StyledAvatar>}
      PopoverContent={
        <List style={style} component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText
              disableTypography
              sx={{ fontSize: 14 }}
              primary={
                <Typography sx={{ fontWeight: "medium", fontSize: 14 }}>
                  Jaydon Frankie
                </Typography>
              }
              secondary="demo@minimals.cc"
            />
          </ListItem>
          <Divider />
          <ListItemButton dense>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton dense>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton dense>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <Divider />
          <ListItemButton dense>
            <ListItemText
              primary={
                <Typography fontSize={14} color="#ff2600">
                  Logout
                </Typography>
              }
            />
          </ListItemButton>
        </List>
      }
    />
  );
};

export default User;
