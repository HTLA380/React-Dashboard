import { Box, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import CardComponent from "./CardComponent";
import { Error, NextWeek, Person, ShoppingCart } from "@mui/icons-material";
import { cyan, orange, red, teal } from "@mui/material/colors";

const ActivitiesData = [
  {
    icon: <NextWeek sx={{ fontSize: 45, color: cyan[500] }} />,
    count: "714k",
    name: "Weekly sales",
  },
  {
    icon: <Person sx={{ fontSize: 45, color: orange[400] }} />,
    count: "1.35m",
    name: "New Users",
  },
  {
    icon: <ShoppingCart sx={{ fontSize: 45, color: teal[400] }} />,
    count: "1.72m",
    name: "Item orders",
  },
  {
    icon: <Error sx={{ fontSize: 45, color: red[400] }} />,
    count: "234",
    name: "Bug Report",
  },
];

const Activities: React.FC = () => {
  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 1, sm: 2, md: 4 }}
      width={"100%"}>
      {ActivitiesData.map((data) => {
        return (
          <Grid xs={1}>
            <CardComponent>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: { sx: "row", md: "column", xl: "row" },
                  alignItems: "top",
                  gap: 3,
                  padding: { xs: 5, lg: 4, xl: 5 },
                  "&:last-child": {
                    paddingBottom: { xs: 5, lg: 4, xl: 5 },
                  },
                }}>
                {data.icon}
                <Box>
                  <Typography variant="h4">{data.count}</Typography>
                  <Typography variant="body1">{data.name}</Typography>
                </Box>
              </CardContent>
            </CardComponent>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Activities;
