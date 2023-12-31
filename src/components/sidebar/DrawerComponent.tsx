import {
  AccountBoxRounded,
  Dashboard,
  LockPerson,
  ShoppingCartCheckoutRounded,
  WebRounded,
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
  styled,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBarData = [
  { name: "dashboard", icon: <Dashboard />, path: "/" },
  {
    name: "user",
    icon: <AccountBoxRounded />,
    path: "/user",
  },
  {
    name: "product",
    icon: <ShoppingCartCheckoutRounded />,
    path: "/product",
  },
  {
    name: "blog",
    icon: <WebRounded />,
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

const DrawerComponent = () => {
  const location = useLocation();

  return (
    <Box sx={{ margin: "2rem 1rem" }}>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        marginBottom={2}
        sx={{ color: blue[700], cursor: "pointer" }}>
        ReactBoard
      </Typography>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        gap={2}
        sx={{
          backgroundColor: "primary.main",
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
      <List>
        {SideBarData.map((data) => (
          <ListItem key={data.name} disablePadding>
            <StyledLink to={data.path}>
              <ListItemButton
                sx={{
                  backgroundColor:
                    location.pathname === data.path
                      ? "#1876f228"
                      : "transparent",
                  borderRadius: 2,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: "2.25rem",
                    color:
                      location.pathname === data.path ? "#357ab8" : "#637381",
                  }}>
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      textTransform={"capitalize"}
                      variant="subtitle1"
                      sx={{
                        color:
                          location.pathname === data.path
                            ? "#357ab8"
                            : "#637381",
                      }}>
                      {data.name}
                    </Typography>
                  }
                />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerComponent;
