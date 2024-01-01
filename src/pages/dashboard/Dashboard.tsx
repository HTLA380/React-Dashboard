import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Activities from "./Activities";
import BarChartComponent from "./BarChart";
import PieChart from "./PieChart";

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "4rem 0 1rem" }}>
      <Typography variant="h4" marginBottom={3}>
        Hi, Welcome back 👋
      </Typography>

      <Activities />
      <Grid container spacing={2} marginTop={0} width={"100%"}>
        <Grid item xs={12} md={8}>
          <BarChartComponent />
        </Grid>
        <Grid item xs={12} md={4}>
          <PieChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
