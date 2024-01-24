import React from "react";
import PopoverEl from "../PopoverEl";

import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const languages = [
  {
    name: "English",
    Image: "/assets/images/flags/en.svg",
  },
  {
    name: "German",
    Image: "/assets/images/flags/de.svg",
  },
  {
    name: "French",
    Image: "/assets/images/flags/fr.svg",
  },
];

const LanguageSelector: React.FC = () => {
  return (
    <PopoverEl
      ControlBtn={
        <IconButton size="medium">
          <img src={"/assets/images/flags/en.svg"} alt="English" />
        </IconButton>
      }>
      <List dense sx={{ width: 160 }} disablePadding>
        {languages.map((lang) => (
          <ListItemButton key={lang.name}>
            <ListItemIcon sx={{ marginRight: 0 }}>
              <img src={lang.Image} alt={lang.name} />
            </ListItemIcon>
            <ListItemText primary={lang.name} />
          </ListItemButton>
        ))}
      </List>
    </PopoverEl>
  );
};

export default LanguageSelector;
