import React from "react";
import PopoverEl from "../PopoverEl";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import UserImg from "../../assets/user.png";

const UserSetting: React.FC = () => {
  return (
    <PopoverEl
      margin=".5rem 0 0 0"
      ControlBtn={
        <IconButton>
          <Avatar
            alt="Htet Aung Lin"
            src={UserImg}
            sx={{ width: 35, height: 35 }}
          />
        </IconButton>
      }>
      <List sx={{ width: 180 }} dense>
        <ListItem>
          <ListItemText
            primary={<Typography variant="subtitle1">Htet Aung Lin</Typography>}
            secondary={"htetaunglin.coder"}
          />
        </ListItem>

        <Divider />

        {["Home", "Profile", "Settings"].map((text) => {
          return (
            <ListItemButton key={text}>
              <ListItemText primary={text} />
            </ListItemButton>
          );
        })}

        <Divider />

        <ListItemButton>
          <ListItemText
            primary={
              <Typography variant="subtitle2" color="error">
                Logout
              </Typography>
            }
          />
        </ListItemButton>
      </List>
    </PopoverEl>
  );
};

export default UserSetting;
