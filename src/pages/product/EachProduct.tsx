import { Box, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledCard } from "../../components/Styles";

interface EachProductInterface {
  productImg: string;
  productName: string;
  productPrice: number;
  discountPrice?: number;
  productPalette: string[];
  status?: string;
}

const EachProduct: React.FC<EachProductInterface> = ({
  productImg,
  productName,
  productPalette,
  productPrice,
  discountPrice,
  status,
}) => {
  return (
    <StyledCard sx={{ position: "relative" }}>
      <CardMedia image={productImg} component={"img"} />
      <CardContent sx={{ textOverflow: "ellipsis", paddingX: 3 }}>
        <Typography
          sx={{
            cursor: "pointer",
            ":hover": { textDecoration: "underline" },
            marginTop: 1,
          }}
          noWrap>
          {productName}
        </Typography>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={1}>
          <Stack flexDirection={"row"}>
            {productPalette.map((eachColor, idx) => {
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
          </Stack>

          {discountPrice ? (
            <Stack flexDirection={"row"} gap={0.5}>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "primary.dark",
                  fontSize: "inherit",
                  fontWeight: "normal",
                }}>
                ${productPrice}
              </Typography>
              <Typography>${discountPrice}</Typography>
            </Stack>
          ) : (
            <Typography sx={{ fontSize: 18 }}>${productPrice}</Typography>
          )}
        </Stack>
      </CardContent>

      {status && (
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
      )}
    </StyledCard>
  );
};

export default EachProduct;
