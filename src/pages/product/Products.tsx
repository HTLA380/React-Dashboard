import { FilterList, KeyboardArrowDown } from "@mui/icons-material";
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

      <Stack flexDirection={"row"} justifyContent={"end"}>
        <Button
          endIcon={<FilterList />}
          sx={{
            margin: 1,
            color: "primary.contrastText",
            textTransform: "capitalize",
            ":hover": {
              bgcolor: "#e4e4e4",
            },
          }}>
          Filters
        </Button>

        <PopoverEl
          ControlBtn={
            <Button
              endIcon={<KeyboardArrowDown />}
              sx={{
                color: "primary.contrastText",
                margin: 1,
                textTransform: "capitalize",
                ":hover": {
                  bgcolor: "#e4e4e4",
                },
              }}>
              SortBy:
              <Typography
                component={"span"}
                color={"secondary.dark"}
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
                        backgroundColor:
                          eachItem === "Newest" ? "#1877f228" : "primary.main",
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
            <Grid item xs={12} sm={6} md={3}>
              <EachProduct
                productImg={data.image}
                productName={data.title}
                productPalette={data.palette}
                productPrice={data.prize}
                discountPrice={data.discount}
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
