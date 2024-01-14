import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box } from "@mui/material";
import React from "react";

const Checkout: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "0.5rem 1.25rem",
        backgroundColor: "#fff",
        position: "fixed",
        top: 140,
        right: 0,
        borderRadius: "100vmax 0 0 100vmax",
        cursor: "pointer",
        border: "none",
        ":hover": {
          filter: "brightness(0.9)",
        },
      }}
      component={"button"}>
      <Badge badgeContent={1} color="error">
        <ShoppingCart sx={{ color: "primary.contrastText" }} />
      </Badge>
    </Box>
  );
};

export default Checkout;
