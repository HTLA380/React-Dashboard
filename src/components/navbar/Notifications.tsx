import React from "react";
import {
  Badge,
  Box,
  Button,
  IconButton,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
  alpha,
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
import PopoverEl from "../PopoverEl";
import { primary } from "../../theme/palette";
import { faker } from "@faker-js/faker";

const StyledPopoverContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 350,
  height: 450,
  overflowY: "scroll",
  [theme.breakpoints.up("md")]: {
    width: 350,
    maxWidth: "none",
    height: "fit-content",
    overflowY: "hidden",
  },

  "&::-webkit-scrollbar": {
    width: "0.6rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgb(178, 182, 196)",
    borderRadius: "100vmax",
  },
}));

const Notifications = () => {
  const renderNotificationHeader = (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: "common.white",
        zIndex: 3,
        padding: 2,
        borderBottom: "1px dashed #e0e0e0",
      }}>
      <Typography fontWeight="medium" fontSize="1rem" variant="body1">
        Notifications
      </Typography>

      <Typography mt={0.25} fontSize="0.9rem" color="text.secondary">
        {" "}
        You have 2 unread messages
      </Typography>
    </Box>
  );

  const renderNotificationGroup = (
    <>
      <List
        disablePadding
        sx={{ width: 1 }}
        subheader={
          <ListSubheader
            disableSticky
            sx={{ py: 1, px: 2.5, typography: "overline" }}>
            New
          </ListSubheader>
        }>
        {notificationData.slice(0, 2).map((data) => {
          return <RenderNotification key={data.id} notification={data} />;
        })}
      </List>

      <List
        disablePadding
        sx={{ width: 1 }}
        subheader={
          <ListSubheader
            disableSticky
            sx={{ py: 1, px: 2.5, typography: "overline" }}>
            Before That
          </ListSubheader>
        }>
        {notificationData.slice(2, 5).map((data) => {
          return <RenderNotification key={data.id} notification={data} />;
        })}
      </List>
    </>
  );

  const renderButton = (
    <Box
      padding={1}
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        zIndex: 3,
        backgroundColor: "common.white",
        borderTop: "1px dashed #e0e0e0",
      }}>
      <Button
        fullWidth
        sx={{
          backgroundColor: "transparent",
          color: "primary.main",
          ":hover": {
            backgroundColor: alpha(primary.main, 0.1),
            color: "primary.main",
          },
        }}>
        View All
      </Button>
    </Box>
  );

  return (
    <PopoverEl
      ControlBtn={
        <IconButton>
          <Badge badgeContent={2} color="error">
            <NotificationsNone />
          </Badge>
        </IconButton>
      }>
      <StyledPopoverContainer>
        {renderNotificationHeader}

        {renderNotificationGroup}

        {renderButton}
      </StyledPopoverContainer>
    </PopoverEl>
  );
};

interface RenderNotificationInterface {
  notification: {
    icon: React.ReactNode;
    name: string;
    desc: string;
    date: string;
    unRead: boolean;
  };
}

const RenderNotification: React.FC<RenderNotificationInterface> = ({
  notification,
}) => {
  return (
    <ListItemButton
      key={notification.name}
      sx={{
        backgroundColor: notification.unRead
          ? "action.selected"
          : "transparent",
        borderColor: "background.default",
      }}>
      <ListItemAvatar>
        <IconButton sx={{ backgroundColor: "background.neutral" }}>
          {notification.icon}
        </IconButton>
      </ListItemAvatar>

      <ListItemText
        primary={
          <>
            <Typography variant="subtitle2" display="inline">
              {notification.name}{" "}
            </Typography>
            <Typography variant="body2" display="inline">
              {notification.desc}
            </Typography>
          </>
        }
        secondary={
          <Typography fontSize={13} color="text.disabled" variant="body2">
            {notification.date}
          </Typography>
        }
      />
    </ListItemButton>
  );
};

const notificationData = [
  {
    icon: <HomeRepairService color="primary" />,
    name: "Your order is placed",
    desc: "waiting for shipping",
    date: "about 4 hours ago",
    unRead: true,
    id: faker.string.uuid(),
  },
  {
    icon: <Person color="error" />,
    name: "Christian",
    desc: "answered to your comment on the Minimal",
    date: "about 4 hours ago",
    unRead: true,
    id: faker.string.uuid(),
  },

  {
    icon: <Message color="warning" />,
    name: "You have new message",
    desc: "5 unread messages",
    date: "1 day ago",
    unRead: false,
    id: faker.string.uuid(),
  },
  {
    icon: <Email color="primary" />,
    name: "You have new mail",
    desc: "sent from Guido Padberg",
    date: "2 days ago",
    unRead: false,
    id: faker.string.uuid(),
  },
  {
    icon: <ShoppingBag color="error" />,
    name: "Delivery processing",
    desc: "Your order is being shipped",
    date: "3 days ago",
    unRead: false,
    id: faker.string.uuid(),
  },
];

export default Notifications;
