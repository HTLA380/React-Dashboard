import React from "react";
import { StyledCard } from "../../../components/Styles";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { HorizontalBarChartData } from "../data";
import { Box, Typography } from "@mui/material";

Chart.register(...registerables);

const HorizontalChart: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Conversion Rates</Typography>
        <Typography variant="body2" color={"secondary.dark"}>
          (+43%) than last year
        </Typography>
      </Box>

      <Box padding={"1rem 2rem"} sx={{ height: "25rem" }}>
        <Bar
          data={{
            labels: HorizontalBarChartData.map((data) => data.name),
            datasets: [
              {
                label: "Visit",
                data: HorizontalBarChartData.map((data) => data.rates),
                backgroundColor: ["rgb(24, 118, 242)"],
                borderRadius: 50,
                maxBarThickness: 8,
              },
            ],
          }}
          options={{
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                mode: "index",
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </Box>
    </StyledCard>
  );
};

export default HorizontalChart;
