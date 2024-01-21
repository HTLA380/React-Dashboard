import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, Stack } from "@mui/material";
import { PieChartData } from "../data";
import { error, info, primary, warning } from "../../../theme/palette";

const PieChart: React.FC = () => {
  return (
    <Card>
      <CardHeader margin={3} title="Website Visits" />

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
                backgroundColor: [
                  primary.main,
                  warning.main,
                  info.main,
                  error.main,
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Stack>
    </Card>
  );
};

export default PieChart;
