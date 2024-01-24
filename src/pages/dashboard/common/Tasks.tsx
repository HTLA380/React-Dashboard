import React, { useState } from "react";
import { StyledStackRowBetween } from "../../../components/Styles";
import {
  Box,
  Card,
  CardHeader,
  Checkbox,
  FormControlLabel,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  CheckCircle,
  Delete,
  Edit,
  MoreVert,
  Share,
} from "@mui/icons-material";
import PopoverEl from "../../../components/PopoverEl";

interface TasksInterface {
  title: string;
  tasks: Array<string>;
}

const Tasks: React.FC<TasksInterface> = ({ title, tasks }) => {
  return (
    <Card>
      <CardHeader title={title} />

      <Box sx={{ padding: "0 2rem 1rem" }}>
        {tasks.map((eachTask, idx) => {
          return (
            <RenderTask
              taskName={eachTask}
              finished={idx == 1}
              key={`Tasks-${idx + 1}`}
            />
          );
        })}
      </Box>
    </Card>
  );
};

const TASK_OPTIONS = [
  { icon: <CheckCircle sx={{ fontSize: 20 }} />, name: "Mark Complete" },
  { icon: <Edit sx={{ fontSize: 20 }} />, name: "Edit" },
  { icon: <Share sx={{ fontSize: 20 }} />, name: "Share" },
  {
    icon: <Delete sx={{ fontSize: 20, color: "error.main" }} />,
    name: "Delete",
  },
];

interface RenderTaskInterface {
  taskName: string;
  finished?: boolean;
}

const RenderTask: React.FC<RenderTaskInterface> = ({
  taskName,
  finished = false,
}) => {
  const [isCheck, setIsChecked] = useState<boolean>(finished);

  return (
    <StyledStackRowBetween
      sx={{ padding: "0.5rem 0", borderBottom: "1px dashed #cedce9" }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isCheck}
            onChange={() => setIsChecked((prev) => !prev)}
          />
        }
        label={
          <Typography
            variant="body2"
            fontSize={17}
            sx={{
              textDecoration: isCheck ? "line-through" : "none",
              color: isCheck ? "text.disabled" : "inherit",
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
        }>
        {" "}
        <List disablePadding>
          {TASK_OPTIONS.map((option) => {
            return (
              <ListItemButton
                key={option.name}
                sx={{ padding: "0.25rem 1rem" }}>
                <ListItemIcon sx={{ minWidth: 30, color: "text.primary" }}>
                  {option.icon}
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography variant="body2">{option.name}</Typography>
                  }
                />
              </ListItemButton>
            );
          })}
        </List>
      </PopoverEl>
    </StyledStackRowBetween>
  );
};

export default Tasks;
