import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface EachProductInterface {
  productImg: string;
  productName: string;
  productPrice: number;
  discountPrice: number | null;
  productColor: string[];
  status?: string;
}

const EachProduct: React.FC<EachProductInterface> = ({
  productImg,
  productName,
  productColor,
  productPrice,
  discountPrice,
  status,
}) => {
  const renderName = (
    <Typography
      sx={{
        cursor: "pointer",
        ":hover": { textDecoration: "underline" },
        marginTop: 1,
      }}
      variant="subtitle2"
      noWrap>
      {productName}
    </Typography>
  );

  const renderColor = (
    <Stack flexDirection={"row"} alignItems={"center"}>
      {productColor.map((eachColor, idx) => {
        if (idx > 2) return;
        return (
          <Box
            key={eachColor}
            sx={{
              backgroundColor: eachColor,
              width: 16,
              height: 16,
              borderRadius: "100vmax",
              border: "2px solid #fff",
              boxShadow: "inset 0 0 3px rgba(0,0,0,0.3)",
              marginLeft: idx > 0 ? -0.7 : 0,
            }}></Box>
        );
      })}
      {productColor.length > 3 && (
        <Typography variant="body2" fontWeight={500}>
          +{productColor.length - 3}
        </Typography>
      )}
    </Stack>
  );

  const renderPrice = discountPrice ? (
    <Stack flexDirection={"row"} alignItems={"baseline"} gap={0.5}>
      <Typography
        variant="body2"
        color={"text.disabled"}
        sx={{
          textDecoration: "line-through",
        }}>
        ${productPrice}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
        ${discountPrice}
      </Typography>
    </Stack>
  ) : (
    <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
      ${productPrice}
    </Typography>
  );

  const renderLabel = status && (
    <Box
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
        backgroundColor: status === "sale" ? "#ff5630" : "#00b8d9",
        padding: "0.1rem 0.4rem",
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 13,
        fontWeight: "medium",
        borderRadius: 1,
      }}>
      {status}
    </Box>
  );

  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia image={productImg} component={"img"} loading="lazy" />

      <CardContent sx={{ textOverflow: "ellipsis", paddingX: 3 }}>
        {renderName}

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={1}>
          {renderColor}

          {renderPrice}
        </Stack>
      </CardContent>

      {renderLabel}
    </Card>
  );
};

export default EachProduct;
