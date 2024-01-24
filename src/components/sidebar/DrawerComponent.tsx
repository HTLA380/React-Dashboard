import {
  InsertChart,
  LockPerson,
  Person,
  ShoppingCart,
  Web,
} from "@mui/icons-material";
import UserImg from "../../assets/user.png";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { primary } from "../../theme/palette";

const SideBarData = [
  { name: "dashboard", icon: <InsertChart />, path: "/" },
  {
    name: "user",
    icon: <Person />,
    path: "/user",
  },
  {
    name: "product",
    icon: <ShoppingCart />,
    path: "/product",
  },
  {
    name: "blog",
    icon: <Web />,
    path: "/blog",
  },
  {
    name: "login",
    icon: <LockPerson />,
    path: "/login",
  },
];

const StyledLink = styled(Link)({
  textDecoration: "none",
  display: "block",
  width: "100%",
});

interface DrawerComponentInterface {
  setIsSidebarActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerComponent: React.FC<DrawerComponentInterface> = ({
  setIsSidebarActive,
}) => {
  const location = useLocation();

  const renderLogo = (
    <StyledLink to={"/"}>
      <Typography
        variant="h5"
        marginBottom={2}
        sx={{
          color: "primary.main",
          cursor: "pointer",
        }}>
        ReactBoard
      </Typography>
    </StyledLink>
  );

  const renderProfile = (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      gap={2}
      sx={{
        backgroundColor: "background.neutral",
        borderRadius: 3,
        padding: "0.5rem",
      }}>
      <IconButton>
        <Avatar
          alt="Htet Aung Lin"
          src={UserImg}
          sx={{ width: 35, height: 35 }}
        />
      </IconButton>
      <Typography variant="subtitle1">Htet Aung Lin</Typography>
    </Stack>
  );

  const renderLinks = (
    <List>
      {SideBarData.map((data) => {
        const isActive = data.path === location.pathname;
        return (
          <ListItem key={data.name} disablePadding sx={{ marginY: 0.5 }}>
            <StyledLink
              to={data.path}
              onClick={() =>
                setIsSidebarActive ? setIsSidebarActive(false) : null
              }>
              <ListItemButton
                color="primary"
                sx={{
                  backgroundColor: isActive
                    ? alpha(primary.main, 0.1)
                    : "transparent",
                  borderRadius: 2,
                  ":hover": {
                    backgroundColor: isActive
                      ? alpha(primary.main, 0.2)
                      : "background.neutral",
                  },
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: "2.25rem",
                    color: isActive ? "#357ab8" : "#637381",
                  }}>
                  {data.icon}
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Typography
                      textTransform={"capitalize"}
                      variant="subtitle2"
                      sx={{
                        color: isActive ? "#357ab8" : "#637381",
                      }}>
                      {data.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <Box sx={{ margin: "2rem 1rem" }}>
      {renderLogo}

      {renderProfile}

      {renderLinks}
    </Box>
  );
};

export default DrawerComponent;
