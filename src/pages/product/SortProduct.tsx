import React from "react";
import PopoverEl from "../../utils/PopoverEl";
import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { grey } from "../../theme/palette";

const SORT_OPTIONS = [
  "Featured",
  "Newest",
  "Price: High-Low",
  "Price:Low-High",
];

const SortProduct: React.FC = () => {
  return (
    <PopoverEl
      ControlBtn={
        <Button
          endIcon={<KeyboardArrowDown />}
          sx={{
            backgroundColor: "background.default",
            color: "text.primary",
            ":hover": {
              color: "text.primary",
              backgroundColor: grey[300],
            },
          }}>
          SortBy:
          <Typography
            component={"span"}
            color={"text.secondary"}
            marginLeft={0.5}>
            Newest
          </Typography>
        </Button>
      }
      PopoverContent={
        <List dense disablePadding>
          {SORT_OPTIONS.map((eachItem) => {
            return (
              <ListItemButton
                key={eachItem}
                selected={eachItem === "Newest"}
                dense
                sx={{
                  padding: "0.2rem  1rem",
                }}>
                <ListItemText primary={eachItem} />
              </ListItemButton>
            );
          })}
        </List>
      }
    />
  );
};

export default SortProduct;
