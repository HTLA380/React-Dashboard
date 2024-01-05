import React from "react";
import { StyledCard } from "../../../components/Styles";
import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

import { ChartData } from "../data";

const BarChartComponent: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Website Visits</Typography>
        <Typography variant="body2" color={"secondary.dark"}>
          (+43%) than last year
        </Typography>
      </Box>

      <Box padding={"2rem"} sx={{ aspectRatio: "1/0.4" }}>
        <Bar
          data={{
            labels: ChartData.map((data) => data.date),
            datasets: [
              {
                label: "Visit",
                data: ChartData.map((data) => data.visit),
                backgroundColor: ["rgb(24, 118, 242)"],
                borderRadius: 50,
                maxBarThickness: 20,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                mode: "x",
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

export default BarChartComponent;
