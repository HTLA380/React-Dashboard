import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";

interface OverViewInterface {
  title: string;
  icon: React.ReactNode;
  total: string;
}

const OverView: React.FC<OverViewInterface> = ({ title, icon, total }) => {
  return (
    <Card sx={{ paddingX: 3, paddingY: 5 }}>
      <Box
        component={Stack}
        flexDirection={"row"}
        alignItems={"center"}
        gap={3}>
        <Box>{icon}</Box>

        <Box>
          <Typography variant="h4">{total}</Typography>
          <Typography variant="body2" fontWeight={500} color={"text.disabled"}>
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default OverView;
