import React from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
import { StyledCard } from "../../components/Styles";
import { Box, Typography } from "@mui/material";

Chart.register(...registerables);

const PieChart: React.FC = () => {
  return (
    <StyledCard>
      <Box margin={3}>
        <Typography variant="h5">Website Visits</Typography>
        <Typography variant="body2">(+43%) than last year</Typography>
      </Box>

      <Box padding={"2rem"}>
        <Pie
          data={{
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </Box>
    </StyledCard>
  );
};

export default PieChart;
