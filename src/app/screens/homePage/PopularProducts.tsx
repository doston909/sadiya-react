import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";

import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import ProductService from "../../services/ProductService";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularProducts } from "./slice";

const popularProductsRetriever = createSelector(
  retrievePopularProducts,
  (popularProducts) => ({ popularProducts })
);

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
});
export default function PopularProducts() {
  // 1. Redux dispatch va selector
  const { setPopularProducts } = actionDispatch(useDispatch());
  const { popularProducts } = useSelector(popularProductsRetriever);

  // 2. 🟢 useEffect shu yerda bo‘ladi
  useEffect(() => {
    const productService = new ProductService();
    productService
      .getPopularProducts()
      .then((data) => setPopularProducts(data))
      .catch((err) => console.log("Popular products error:", err));
  }, []); // ← faqat 1 marta ishlaydi (component mount bo‘lganda)

  // 3. return qismi pastda
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Products</Box>
          <Stack className="cards-frame">
            {popularProducts.length !== 0 ? (
              popularProducts.map((product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={imagePath} alt="" />
                      </CardCover>
                      <CardContent>
                        <Typography textColor="#fff">
                          {product.productName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">
                Popular products are not available!
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
