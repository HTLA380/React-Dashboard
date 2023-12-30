import React from "react";
import PopoverEl from "../../utils/PopoverEl";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import UserImg from "../../assets/user.png";

const StyledList = styled(List)({
  width: 180,
});

const User: React.FC = () => {
  return (
    <PopoverEl
      margin=".5rem 0 0 0"
      Btn={
        <IconButton>
          <Avatar
            alt="Htet Aung Lin"
            src={UserImg}
            sx={{ width: 35, height: 35 }}
          />
        </IconButton>
      }
      PopoverContent={
        <StyledList dense>
          <ListItem>
            <ListItemText
              primary={<Typography variant="h6">Htet Aung Lin</Typography>}
              secondary={"htetaunglin.coder@gmail.com"}
            />
          </ListItem>
          <Divider />
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary={
                <Typography variant="h6" color="#ff2600">
                  Logout
                </Typography>
              }
            />
          </ListItemButton>
        </StyledList>
      }
    />
  );
};

export default User;
