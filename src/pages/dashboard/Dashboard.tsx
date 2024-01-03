import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Activities from "./Activities";
import BarChartComponent from "./BarChart";
import PieChart from "./PieChart";
import HorizontalChart from "./HorizontalChart";
import RadarChart from "./RadarChart";

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "4rem 0 1rem" }}>
      <Typography
        variant="h4"
        marginBottom={3}
        sx={{
          fontSize: { xs: "1.4rem", sm: "1.6rem" },
        }}>
        Hi, Welcome back 👋
      </Typography>

      <Activities />

      <Grid container spacing={2} marginTop={0} width={"100%"}>
        <Grid item xs={12} md={6} xl={8}>
          <BarChartComponent />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <PieChart />
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={0} width={"100%"}>
        <Grid item xs={12} md={6} xl={8}>
          <HorizontalChart />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <RadarChart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
