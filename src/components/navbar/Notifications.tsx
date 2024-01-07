import React from "react";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import {
  Email,
  HomeRepairService,
  Message,
  NotificationsNone,
  Person,
  ShoppingBag,
} from "@mui/icons-material";
import PopoverEl from "../../utils/PopoverEl";
import { blue } from "@mui/material/colors";

const StyledCategory = styled(Typography)({
  textTransform: "uppercase",
  color: blue[400],
  fontWeight: "bold",
  fontSize: 14,
  margin: ".5rem 1rem",
});

const StyledContainer = styled(Box)({
  width: 300,
  padding: "1rem 0",
});

const RenderNotifications = () => {
  return notificationData.map((data) => (
    <React.Fragment key={data.group}>
      <StyledCategory>{data.group}</StyledCategory>
      <List dense disablePadding>
        {data.notifications.map((newNoti) => (
          <ListItemButton key={newNoti.name}>
            <ListItemAvatar>
              <IconButton sx={{ backgroundColor: "primary.light" }}>
                {newNoti.icon}
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography variant="body1" display={"inline"}>
                    {newNoti.name}{" "}
                  </Typography>
                  <Typography
                    variant="body2"
                    display={"inline"}
                    color={"secondary.dark"}>
                    {newNoti.desc}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <Typography
                  fontSize={13}
                  color={"secondary.light"}
                  variant="body2">
                  {newNoti.date}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </React.Fragment>
  ));
};

const Notifications: React.FC = () => {
  return (
    <PopoverEl
      ControlBtn={
        <IconButton>
          <Badge badgeContent={2} color="warning">
            <NotificationsNone />
          </Badge>
        </IconButton>
      }
      PopoverContent={
        <StyledContainer>
          <Box pl={2}>
            <Typography fontWeight={"medium"} fontSize={"1rem"} variant="body1">
              Notifications
            </Typography>
            <Typography
              mt={0.25}
              mb={1}
              fontSize={"0.9rem"}
              color={"secondary.dark"}>
              {" "}
              You have 2 unread messages
            </Typography>
          </Box>
          <Divider />
          <RenderNotifications />
        </StyledContainer>
      }
    />
  );
};

const notificationData = [
  {
    group: "new",
    notifications: [
      {
        icon: <HomeRepairService color="warning" />,
        name: "Your order is placed",
        desc: "waiting for shipping",
        date: "about 4 hours ago",
      },
      {
        icon: <Person color="error" />,
        name: "Christian",
        desc: "answered to your comment on the Minimal",
        date: "about 4 hours ago",
      },
    ],
  },
  {
    group: "before",
    notifications: [
      {
        icon: <Message sx={{ color: "#ab47bc" }} />,
        name: "You have new message",
        desc: "5 unread messages",
        date: "1 day ago",
      },
      {
        icon: <Email color="info" />,
        name: "You have new mail",
        desc: "sent from Guido Padberg",
        date: "2 days ago",
      },
      {
        icon: <ShoppingBag color="warning" />,
        name: "Delivery processing",
        desc: "Your order is being shipped",
        date: "3 days ago",
      },
    ],
  },
];

export default Notifications;
