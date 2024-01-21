import React from "react";
import { Box, Card, CardHeader } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

import { ChartData } from "../data";

const BarChartComponent: React.FC = () => {
  return (
    <Card>
      <CardHeader
        margin={3}
        title="Website Visits"
        subheader="(+43%) than last year"
      />

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
    </Card>
  );
};

export default BarChartComponent;
