import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { ClearAll, Close } from "@mui/icons-material";
import { grey } from "../../../theme/palette";

// -----------------------------------------------------

const GENDER_OPTIONS = ["Men", "Women", "Kids"];
const CATEGORY_OPTIONS = ["All", "Shoes", "Apparel", "Accessories"];
const RATING_OPTIONS = ["up4Star", "up3Star", "up2Star", "up1Star"];
const PRICE_OPTIONS = [
  { value: "below", label: "Below $25" },
  { value: "between", label: "Between $25 - $75" },
  { value: "above", label: "Above $75" },
];
const COLOR_OPTIONS = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

// -----------------------------------------------------

interface FilterDrawerInterface {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterDrawer: React.FC<FilterDrawerInterface> = ({ state, setState }) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  // -----------------------------------------------------

  const renderGender = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Gender</Typography>
      <FormGroup>
        {GENDER_OPTIONS.map((item) => (
          <FormControlLabel key={item} control={<Checkbox />} label={item} />
        ))}
      </FormGroup>
    </Stack>
  );

  const renderCategory = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Category</Typography>
      <RadioGroup>
        {CATEGORY_OPTIONS.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderColors = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Colors</Typography>
      <Stack flexDirection={"row"} alignItems={"center"} paddingX={1}>
        {COLOR_OPTIONS.slice(0, 4).map((eachColor) => {
          return (
            <IconButton key={eachColor}>
              <Box
                sx={{
                  backgroundColor: eachColor,
                  width: 20,
                  height: 20,
                  borderRadius: "100vmax",
                  border: "1px solid #b8b8b8",
                }}></Box>
            </IconButton>
          );
        })}
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"} paddingX={1}>
        {COLOR_OPTIONS.slice(4, 8).map((eachColor) => {
          return (
            <IconButton key={eachColor}>
              <Box
                sx={{
                  backgroundColor: eachColor,
                  width: 20,
                  height: 20,
                  borderRadius: "100vmax",
                  border: "1px solid #b8b8b8",
                }}></Box>
            </IconButton>
          );
        })}
      </Stack>
    </Stack>
  );

  const renderPrice = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Price</Typography>
      <RadioGroup>
        {PRICE_OPTIONS.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderRating = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Rating</Typography>
      <RadioGroup>
        {RATING_OPTIONS.map((item, index) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                disableRipple
                color="default"
                icon={<Rating readOnly value={4 - index} />}
                checkedIcon={<Rating readOnly value={4 - index} />}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                }}
              />
            }
            label="& Up"
            sx={{
              my: 0.5,
              borderRadius: 1,
              "&:hover": { opacity: 0.48 },
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  // -----------------------------------------------------

  return (
    <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 280 }} role="presentation">
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            padding: "1rem",
            position: "sticky",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 10,
            backgroundColor: "background.default",
            borderBottom: "1px solid #cacaca",
          }}>
          <Typography variant="h5">Filters</Typography>
          <IconButton size="small" onClick={toggleDrawer(false)}>
            <Close sx={{ fontSize: 22 }} />
          </IconButton>
        </Stack>

        <Stack spacing={3} sx={{ p: 3 }}>
          {renderGender}

          {renderCategory}

          {renderColors}

          {renderPrice}

          {renderRating}
        </Stack>

        <Box
          sx={{
            padding: "1rem",
            position: "sticky",
            width: "100%",
            bottom: 0,
            left: 0,
            backgroundColor: "#fff",
          }}>
          <Button
            startIcon={<ClearAll />}
            fullWidth
            sx={{
              paddingY: 1.5,
              backgroundColor: "background.default",
              color: "text.primary",
              border: "1px solid #000",
              ":hover": {
                color: "text.primary",
                backgroundColor: grey[300],
              },
            }}>
            Clear All
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
