import React from "react";
import PopoverEl from "../../utils/PopoverEl";
import {
  Divider,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const StyledAvatar = styled(Fab)({
  backgroundColor: blue[400],
  marginLeft: 4,
  boxShadow: "none",
  ":hover": {
    backgroundColor: blue[800],
  },
});

const StyledList = styled(List)({
  width: 180,
});

const User: React.FC = () => {
  return (
    <PopoverEl
      margin=".5rem 0 0 0"
      Btn={<StyledAvatar size="small">J</StyledAvatar>}
      PopoverContent={
        <StyledList dense>
          <ListItem>
            <ListItemText
              primary={<Typography variant="h6">Jaydon Frankie</Typography>}
              secondary={"demo@minimals.cc"}
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
