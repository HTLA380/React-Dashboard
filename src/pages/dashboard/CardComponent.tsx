import { Card } from "@mui/material";
import React from "react";

interface CardComponentInterface {
  children: React.ReactNode;
}

const CardComponent: React.FC<CardComponentInterface> = ({ children }) => {
  return (
    <Card
      sx={{
        padding: 0,
        width: "100%",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.055)",
        backgroundColor: "#fff",
        borderRadius: 4,
      }}>
      {children}
    </Card>
  );
};

export default CardComponent;
