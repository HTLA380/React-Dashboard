import React from "react";
import { StyledIcon } from "./NavbarStyles";
import PopoverEl from "../../utils/PopoverEl";

import flagEn from "../../assets/flags/en.svg";
import flagDe from "../../assets/flags/de.svg";
import flagFr from "../../assets/flags/fr.svg";
import {
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
      Btn={
        <StyledIcon>
          <img src={flagEn} alt="English" />
        </StyledIcon>
      }
      PopoverContent={
        <List dense sx={{ width: 160 }} disablePadding>
          {languages.map((lang) => (
            <ListItemButton>
              <ListItemIcon>
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
