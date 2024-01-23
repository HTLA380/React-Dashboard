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
import {
  Error,
  Facebook,
  Google,
  LinkedIn,
  NextWeek,
  Person,
  ShoppingCart,
  Twitter,
} from "@mui/icons-material";
import { faker } from "@faker-js/faker";

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
          <NewsUpdate
            title="News Update"
            lists={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              date: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <OrderTimeLine
            title="Order Timeline"
            lists={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                "1983, orders, $4220",
                "12 Invoices have been paid",
                "Order #37745 from September",
                "New order placed #XF-2356",
                "New order placed #XF-2346",
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <TrafficBySite
            title="Traffic by Site"
            items={[
              {
                icon: <Facebook />,
                name: "facebook",
                number: "323.23k",
                iconColor: "primary.main",
              },
              {
                icon: <Google />,
                name: "google",
                number: "341.21k",
                iconColor: "error.main",
              },
              {
                icon: <LinkedIn />,
                name: "LinkedIn",
                number: "411.21l",
                iconColor: "info.dark",
              },
              {
                icon: <Twitter />,
                name: "Twitter",
                number: "443.23k",
                iconColor: "info.main",
              },
            ]}
          />
        </Grid>

        <Grid item xs={12} md={6} xl={8}>
          <Tasks
            title="Tasks"
            tasks={[
              "Create FireStone Logo",
              "Add SCSS and JS files if required",
              "Stakeholder Meeting",
              "Scoping & Estimations",
              "Sprint Showcase",
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
