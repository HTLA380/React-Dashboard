import React from "react";
import { StyledIcon, StyledStack } from "./NavbarStyles";
import PopoverEl from "../../utils/PopoverEl";

import flagEn from "../../assets/flags/en.svg";
import flagDe from "../../assets/flags/de.svg";
import flagFr from "../../assets/flags/fr.svg";
import { Button, Stack, Typography } from "@mui/material";
import theme from "../../../theme/theme";
import { grey } from "@mui/material/colors";

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
    <StyledStack>
      <PopoverEl
        Btn={
          <StyledIcon>
            <img src={flagEn} alt="English" />
          </StyledIcon>
        }
        PopoverContent={
          <Stack>
            {languages.map((lang) => (
              <Button
                variant="text"
                sx={{
                  padding: "0.5rem 2rem 0.5rem 0.5rem",
                  ":hover": { background: grey[200] },
                }}>
                <img src={lang.Image} alt={lang.name} />
                <Typography
                  color={theme.palette.primary.contrastText}
                  textTransform={"capitalize"}
                  ml={2}
                  variant="body1">
                  {lang.name}
                </Typography>
              </Button>
            ))}
          </Stack>
        }
      />
    </StyledStack>
  );
};

export default LanguageSelector;
