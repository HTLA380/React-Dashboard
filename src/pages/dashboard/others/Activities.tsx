import React from "react";
import { Box, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { StyledCard } from "../../../components/Styles";
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
    <Grid container spacing={2} width={"100%"}>
      {ActivitiesData.map((data) => (
        <Grid xs={12} sm={6} md={3} key={data.name}>
          <StyledCard>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column", xl: "row" },
                alignItems: "top",
                gap: 3,
                padding: { xs: 4, xl: 5 },
                "&:last-child": {
                  paddingBottom: { xs: 4, xl: 5 },
                },
              }}>
              {data.icon}
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.25rem", sm: "1.4rem", md: "1.6rem" },
                  }}>
                  {data.count}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                  }}
                  color={"secondary"}
                  fontWeight={500}>
                  {data.name}
                </Typography>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Activities;
