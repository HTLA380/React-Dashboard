import { Container, Typography } from "@mui/material";
import React from "react";
import Activities from "./Activities";

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: 10 }}>
      <Typography variant="h4" marginBottom={3}>
        Hi, Welcome back 👋
      </Typography>

      <Activities />
    </Container>
  );
};

export default Dashboard;
