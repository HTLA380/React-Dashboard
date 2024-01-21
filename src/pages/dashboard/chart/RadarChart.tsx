import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Radar } from "react-chartjs-2";
import { Box, Card, CardHeader } from "@mui/material";
import { radarChartData } from "../data";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart: React.FC = () => {
  return (
    <Card>
      <CardHeader
        title="Current Subjects
        "
      />
      <Box padding={"2rem"} height={420}>
        <Radar
          data={{
            labels: [
              "English",
              "History",
              "Physics",
              "Geography",
              "Chinese",
              "Math",
            ],
            datasets: radarChartData.map((data) => data),
          }}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "bottom",
                labels: {
                  boxWidth: 15,
                  boxHeight: 15,
                  pointStyle: "circle",
                  padding: 20,
                },
              },
              tooltip: {
                enabled: false,
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

export default RadarChart;
