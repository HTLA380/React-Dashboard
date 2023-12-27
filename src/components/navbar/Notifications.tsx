import React from "react";
import { StyledIcon, StyledStack } from "./NavbarStyles";
import {
  Avatar,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
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
import theme from "../../../theme/theme";
import { blue, grey } from "@mui/material/colors";

const StyledListItem = styled(ListItem)({
  alignItems: "center",
  padding: ".5rem 1rem",
  cursor: "pointer",
  ":hover": { backgroundColor: grey[100] },
});

const notificationData = {
  new: [
    {
      icon: <HomeRepairService color="warning" />,
      name: "Your order is placed",
      desc: "waiting for shipping",
      date: "about 4 hours ago",
    },
    {
      icon: <Person color="error" />,
      name: "Christian",
      desc: "answered to  your comment on the Minimal",
      date: "about 4 hours ago",
    },
  ],
  before: [
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
};

const Notifications: React.FC = () => {
  return (
    <StyledStack>
      <PopoverEl
        Btn={
          <StyledIcon>
            <Badge badgeContent={2} color="warning">
              <NotificationsNone />
            </Badge>
          </StyledIcon>
        }
        PopoverContent={
          <Stack width={300} pt={2}>
            <Typography variant="h5" fontSize={16} fontWeight={"medium"} ml={2}>
              Notifications
            </Typography>
            <Typography
              mt={0.25}
              mb={1}
              ml={2}
              fontSize={14}
              color={theme.palette.secondary.light}>
              You have 2 unread messages
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              color={blue[400]}
              fontWeight={"bold"}
              my={1}
              ml={2}>
              NEW
            </Typography>
            <List
              sx={{
                width: "100%",
              }}>
              {notificationData.new.map((newNoti) => (
                <StyledListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ backgroundColor: theme.palette.primary.main }}>
                      {newNoti.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          fontWeight={"medium"}
                          variant="body2"
                          color="text.primary">
                          {newNoti.name}{" "}
                        </Typography>
                        {newNoti.desc}
                        <Typography fontSize={12} color={"#919eab"}>
                          {newNoti.date}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </StyledListItem>
              ))}
              <Divider />
              <Typography
                variant="body2"
                color={blue[400]}
                fontWeight={"bold"}
                my={1}
                ml={2}>
                BEFORE
              </Typography>
              {notificationData.before.map((newNoti) => (
                <StyledListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ backgroundColor: theme.palette.primary.main }}>
                      {newNoti.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          fontWeight={"medium"}
                          variant="body2"
                          color="text.primary">
                          {newNoti.name}{" "}
                        </Typography>
                        {newNoti.desc}
                        <Typography fontSize={12} color={"#919eab"}>
                          {newNoti.date}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </StyledListItem>
              ))}
            </List>
            {/* {notificationData.new.map((data) => )} */}
          </Stack>
        }
      />
    </StyledStack>
  );
};

export default Notifications;
