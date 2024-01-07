import React from "react";
import PopoverEl from "../../utils/PopoverEl";

import flagEn from "../../assets/flags/en.svg";
import flagDe from "../../assets/flags/de.svg";
import flagFr from "../../assets/flags/fr.svg";
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
    Image: flagEn,
  },
  {
    name: "German",
    Image: flagDe,
  },
  {
    name: "French",
    Image: flagFr,
  },
];

const LanguageSelector: React.FC = () => {
  return (
    <PopoverEl
      ControlBtn={
        <IconButton size="medium">
          <img src={flagEn} alt="English" />
        </IconButton>
      }
      PopoverContent={
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
      }
    />
  );
};

export default LanguageSelector;
