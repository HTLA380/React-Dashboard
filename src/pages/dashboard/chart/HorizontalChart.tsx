import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { HorizontalBarChartData } from "../../../mock/dashboardData";
import { Box, Card, CardHeader } from "@mui/material";
import { primary } from "../../../theme/palette";

Chart.register(...registerables);

const HorizontalChart: React.FC = () => {
  return (
    <Card>
      <CardHeader
        margin={3}
        title="Conversion Rates"
        subheader="(+43%) than last year"
      />

      <Box padding={"1rem 2rem"} sx={{ height: "25rem" }}>
        <Bar
          data={{
            labels: HorizontalBarChartData.map((data) => data.name),
            datasets: [
              {
                label: "Visit",
                data: HorizontalBarChartData.map((data) => data.rates),
                backgroundColor: primary.main,
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
    </Card>
  );
};

export default HorizontalChart;
