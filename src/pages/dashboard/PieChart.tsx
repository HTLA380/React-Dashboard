import React from "react";
import { Pie } from "react-chartjs-2";
import { StyledCard } from "../../components/Styles";
import { Box, Stack, Typography } from "@mui/material";
import { PieChartData } from "./chartData";

const PieChart: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Current Visits</Typography>
      </Box>

      <Stack padding={"2rem"} height={400} alignItems={"center"}>
        <Pie
          options={{
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  boxWidth: 15,
                  boxHeight: 15,
                  pointStyle: "circle",
                },
              },
            },
            maintainAspectRatio: false,
          }}
          data={{
            labels: PieChartData.map((data) => data.name),
            datasets: [
              {
                data: PieChartData.map((data) => data.visits),
                backgroundColor: ["#1877f2", "#ffab00", "#00b8d9", "#ff5630"],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Stack>
    </StyledCard>
  );
};

export default PieChart;
