import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import EachProduct from "./EachProduct";
import { productData } from "../../mock/productData";
import Checkout from "./Checkout";
import Filter from "./Filter/Filter";
import { StyledStackRowEnd } from "../../components/Styles";
import SortProduct from "./SortProduct";

const Products: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ width: "100%" }}>
      <Typography variant="h4">Products</Typography>
      <StyledStackRowEnd>
        <Filter />
        <SortProduct />
      </StyledStackRowEnd>

      <Grid container spacing={3} marginTop={2}>
        {productData.map((data) => {
          return (
            <Grid key={data.id} item xs={11} sm={6} md={3}>
              <EachProduct
                productImg={data.image}
                productName={data.name}
                productColor={data.colors}
                productPrice={data.price}
                discountPrice={data.discountPrice}
                status={data.status}
              />
            </Grid>
          );
        })}
      </Grid>

      <Checkout />
    </Container>
  );
};

export default Products;
