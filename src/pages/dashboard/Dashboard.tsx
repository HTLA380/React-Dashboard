import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Activities from "./others/Activities";
import BarChartComponent from "./chart/BarChart";
import PieChart from "./chart/PieChart";
import HorizontalChart from "./chart/HorizontalChart";
import RadarChart from "./chart/RadarChart";
import NewsUpdate from "./others/NewsUpdate";
import OrderTimeLine from "./others/OrderTimeLine";
import SocialMedia from "./others/SocialMedia";

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

      <Grid container spacing={2} marginTop={0} width={"100%"}>
        <Grid item xs={12} md={6} xl={8}>
          <NewsUpdate />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <OrderTimeLine />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={0} width={"100%"}>
        <Grid item xs={12} md={6} xl={4}>
          <SocialMedia />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
