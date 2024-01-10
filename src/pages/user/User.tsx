import { Add, List, Search } from "@mui/icons-material";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledCard } from "../../components/Styles";
import UserTable from "./UserTable";

const User: React.FC = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={5}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.4rem", sm: "1.6rem" },
          }}>
          Users
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.contrastText",
            color: "primary.main",
            textTransform: "capitalize",
            py: 1,
            borderRadius: 2,
            ":hover": {
              backgroundColor: "primary.contrastText",
            },
          }}>
          <Add fontSize="small" />
          <Typography component={"span"} marginLeft={0.2}>
            New User
          </Typography>
        </Button>
      </Stack>

      <StyledCard>
        <Toolbar sx={{ padding: 3, justifyContent: "space-between" }}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            placeholder="Search user..."
            variant="outlined"
          />

          <IconButton>
            <List sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>

        <UserTable />
      </StyledCard>
    </Container>
  );
};

export default User;
