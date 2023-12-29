import React from "react";
import PopoverEl from "../../utils/PopoverEl";
import {
  Divider,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { StyledText } from "./NavbarStyles";

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
              primary={<StyledText>Jaydon Frankie</StyledText>}
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
              primary={<StyledText color="#ff2600">Logout</StyledText>}
            />
          </ListItemButton>
        </StyledList>
      }
    />
  );
};

export default User;
