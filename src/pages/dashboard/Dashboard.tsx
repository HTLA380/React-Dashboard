import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import OverView from "./common/OverView";
import BarChartComponent from "./chart/BarChart";
import PieChart from "./chart/PieChart";
import HorizontalChart from "./chart/HorizontalChart";
import RadarChart from "./chart/RadarChart";
import NewsUpdate from "./common/NewsUpdate";
import OrderTimeLine from "./common/OrderTimeLine";
import TrafficBySite from "./common/TrafficBySite";
import Tasks from "./common/Tasks";
import { Error, NextWeek, Person, ShoppingCart } from "@mui/icons-material";

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" marginBottom={3}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3} marginTop={0} width={"100%"}>
        <Grid item xs={12} sm={6} md={3}>
          <OverView
            icon={<NextWeek sx={{ fontSize: 45, color: "success.main" }} />}
            total={"714k"}
            title="Weekly Sales"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <OverView
            icon={<Person sx={{ fontSize: 45, color: "primary.main" }} />}
            total={"1.35m"}
            title="New Users"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <OverView
            icon={<ShoppingCart sx={{ fontSize: 45, color: "warning.main" }} />}
            total={"1.72m"}
            title="Item orders"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverView
            icon={<Error sx={{ fontSize: 45, color: "error.main" }} />}
            total={"234"}
            title="Bug Report"
          />
        </Grid>

        <Grid item xs={12} md={6} xl={8}>
          <BarChartComponent />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <PieChart />
        </Grid>

        <Grid item xs={12} md={6} xl={8}>
          <HorizontalChart />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <RadarChart />
        </Grid>

        <Grid item xs={12} md={6} xl={8}>
          <NewsUpdate />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <OrderTimeLine />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <TrafficBySite />
        </Grid>

        <Grid item xs={12} md={6} xl={8}>
          <Tasks />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
