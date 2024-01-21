import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PopoverEl from "../../utils/PopoverEl";
import EachProduct from "./EachProduct";
import { productData } from "./productData";
import Checkout from "./Checkout";
import Filter from "./Filter/Filter";
import { grey } from "../../theme/palette";

const Products: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.4rem", sm: "1.6rem" },
        }}>
        Products
      </Typography>
      <Stack flexDirection={"row"} justifyContent={"end"} alignItems={"center"}>
        <Filter />

        <PopoverEl
          ControlBtn={
            <Button
              endIcon={<KeyboardArrowDown />}
              sx={{
                backgroundColor: "background.default",
                color: "text.primary",
                ":hover": {
                  color: "text.primary",
                  backgroundColor: grey[300],
                },
              }}>
              SortBy:
              <Typography
                component={"span"}
                color={"text.secondary"}
                marginLeft={0.5}>
                Newest
              </Typography>
            </Button>
          }
          PopoverContent={
            <List dense disablePadding>
              {["Featured", "Newest", "Price: High-Low", "Price:Low-High"].map(
                (eachItem) => {
                  return (
                    <ListItemButton
                      key={eachItem}
                      dense
                      sx={{
                        padding: "0.2rem  1rem",
                      }}>
                      <ListItemText primary={eachItem} />
                    </ListItemButton>
                  );
                }
              )}
            </List>
          }
        />
      </Stack>

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
