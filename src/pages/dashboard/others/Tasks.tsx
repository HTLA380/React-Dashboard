import React, { useState } from "react";
import { StyledCard } from "../../../components/Styles";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  CheckCircle,
  Delete,
  Edit,
  MoreVert,
  Share,
} from "@mui/icons-material";
import PopoverEl from "../../../utils/PopoverEl";

interface RenderTasksInterface {
  taskName: string;
  finished?: boolean;
}

const RenderTasks: React.FC<RenderTasksInterface> = ({
  taskName,
  finished = false,
}) => {
  const [isCheck, setIsChecked] = useState<boolean>(finished);

  const options = [
    { icon: <CheckCircle sx={{ fontSize: 20 }} />, name: "Mark Complete" },
    { icon: <Edit sx={{ fontSize: 20 }} />, name: "Edit" },
    { icon: <Share sx={{ fontSize: 20 }} />, name: "Share" },
    {
      icon: <Delete sx={{ fontSize: 20, color: "rgb(255, 86, 48)" }} />,
      name: "Delete",
    },
  ];

  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ padding: "0.5rem 0", borderBottom: "1px dashed #cedce9" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isCheck}
            onChange={() => setIsChecked((prev) => !prev)}
            sx={{
              color: "#4b6075",
              "&.Mui-checked": {
                color: "#0066ff",
              },
            }}
          />
        }
        label={
          <Typography
            variant="body2"
            fontSize={17}
            sx={{
              textDecoration: isCheck ? "line-through" : "none",
              color: isCheck ? "secondary.dark" : "primary.contrastText",
            }}>
            {taskName}
          </Typography>
        }
      />

      <PopoverEl
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        ControlBtn={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        PopoverContent={
          <List disablePadding>
            {options.map((option) => {
              return (
                <ListItemButton
                  key={option.name}
                  sx={{ padding: "0.25rem 1rem" }}>
                  <ListItemIcon
                    sx={{ minWidth: 30, color: "primary.contrastText" }}>
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2" fontSize={14}>
                        {option.name}
                      </Typography>
                    }
                  />
                </ListItemButton>
              );
            })}
          </List>
        }
      />
    </Stack>
  );
};

const Tasks: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Tasks</Typography>
      </Box>

      <Box sx={{ padding: "0 2rem 1rem" }}>
        <RenderTasks taskName={"Create FireStone Logo"} finished />
        <RenderTasks taskName={"Add SCSS and JS files if required"} />
        <RenderTasks taskName={"Stakeholder Meeting"} />
        <RenderTasks taskName={"Scoping & Estimations"} />
        <RenderTasks taskName={"Sprint Showcase"} />
      </Box>
    </StyledCard>
  );
};

export default Tasks;
