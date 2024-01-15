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
            backgroundColor: "#fff",
            borderBottom: "1px solid #cacaca",
          }}>
          <Typography variant="h3" fontSize={18}>
            Filters
          </Typography>
          <IconButton size="small" onClick={toggleDrawer(false)}>
            <Close sx={{ fontSize: 22 }} />
          </IconButton>
        </Stack>

        <Box sx={{ padding: "1rem" }}>
          {/* ====  gender ==== */}
          <Box marginBottom={3}>
            <Typography marginBottom={1}>Gender</Typography>
            <FormGroup>
              {["Men", "Women", "Kids"].map((item) => {
                return (
                  <FormControlLabel
                    key={item}
                    control={
                      <Checkbox
                        sx={{
                          color: "#4b6075",
                          "&.Mui-checked": {
                            color: "#0066ff",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography fontWeight={"normal"} fontSize={16}>
                        {item}
                      </Typography>
                    }
                  />
                );
              })}
            </FormGroup>
          </Box>

          {/* ==== Category  ==== */}
          <Box marginBottom={3}>
            <Typography marginBottom={1}>Category</Typography>
            <RadioGroup defaultValue="Shoes" name="radio-buttons-group">
              {["All", "Shoes", "Apparel", "Accessories"].map((item) => {
                return (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={
                      <Radio
                        sx={{
                          color: "#4b6075",
                          "&.Mui-checked": {
                            color: "#0066ff",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography fontWeight={"normal"} fontSize={16}>
                        {item}
                      </Typography>
                    }
                  />
                );
              })}
            </RadioGroup>
          </Box>

          {/* ==== Colors  ==== */}
          <Box marginBottom={3}>
            <Typography marginBottom={1}>Colors</Typography>

            <Stack flexDirection={"row"} alignItems={"center"} paddingX={1}>
              {["green", "black", "white", "pink"].map((eachColor) => {
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
              {["red", "blue", "limegreen", "orange"].map((eachColor) => {
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
          </Box>

          {/* ==== Price  ==== */}
          <Box marginBottom={3}>
            <Typography marginBottom={1}>Price</Typography>
            <RadioGroup defaultValue="Below $25" name="radio-buttons-group">
              {["Below $25", "Between $25 - $75", "Above $75"].map((price) => {
                return (
                  <FormControlLabel
                    key={price}
                    value={price}
                    control={
                      <Radio
                        sx={{
                          color: "#4b6075",
                          "&.Mui-checked": {
                            color: "#0066ff",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography fontWeight={"normal"} fontSize={16}>
                        {price}
                      </Typography>
                    }
                  />
                );
              })}
            </RadioGroup>
          </Box>

          {/* Rating */}

          <Box marginBottom={1}>
            <Typography marginBottom={1}>Rating</Typography>
            {[4, 3, 2, 1].map((value) => {
              return (
                <Stack
                  key={value}
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={1}
                  marginBottom={2.5}
                  sx={{
                    cursor: "pointer",
                  }}>
                  <Rating name="read-only" value={value} readOnly />
                  <Typography fontSize={16} fontWeight={"normal"}>
                    & Up
                  </Typography>
                </Stack>
              );
            })}
          </Box>
          {/* ========== */}
        </Box>
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
            sx={{
              color: "primary.contrastText",
              border: "1px solid #212b36",
              width: "100%",
              paddingY: 1.5,
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
            startIcon={<ClearAll />}>
            Clear All
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
