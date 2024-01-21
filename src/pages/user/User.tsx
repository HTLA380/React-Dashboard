import { Add } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import UserTable from "./UserTable";

const User: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component={Stack}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={5}>
        <Typography variant="h4">Users</Typography>
        <Button startIcon={<Add />} variant="contained">
          New User
        </Button>
      </Box>

      <UserTable />
    </Container>
  );
};

export default User;
