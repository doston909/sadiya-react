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
  const { setPopularProducts } = actionDispatch(useDispatch());
  const { popularProducts } = useSelector(popularProductsRetriever);

  useEffect(() => {
    const productService = new ProductService();
    productService
      .getPopularProducts()
      .then((data) => setPopularProducts(data))
      .catch((err) => console.log("Popular products error:", err));
  }, []);

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
                    <Card
                      className="card"
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "16px",
                        transition: "all 0.4s ease",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                        },
                        "&:hover img": {
                          transform: "scale(1.1)",
                          filter: "brightness(1.1)",
                        },
                        "&:hover .product-box, &:hover .product-name, &:hover .view-box":
                          {
                            opacity: 1,
                          },
                      }}
                    >
                      <CardCover>
                        <img
                          src={imagePath}
                          alt={product.productName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.5s ease, filter 0.5s ease",
                          }}
                        />
                      </CardCover>

                      <Box
                        className="view-box"
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "20px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          backgroundColor: "rgba(243, 222, 222, 0.55)",
                          color: "#3d3737ff",
                          padding: "4px 10px",
                          borderRadius: "12px",
                          fontSize: "14px",
                          fontWeight: 500,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <VisibilityIcon
                          sx={{ fontSize: 18, color: "#252121ff" }}
                        />
                        {product.productViews}
                      </Box>

                      <CardContent
                        className="product-box"
                        sx={{
                          position: "absolute",
                          bottom: "5px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          textAlign: "center",
                          background: "rgba(254, 254, 254, 0.79)",
                          borderRadius: "10px",
                          padding: "6px 14px",
                          maxWidth: "90%",
                          opacity: 0,
                          transition: "opacity 0.4s ease",
                          pointerEvents: "none",
                        }}
                      >
                        <Typography
                          className="product-name"
                          textColor="#151111ff"
                          sx={{
                            fontWeight: 600,
                            fontSize: "18px",
                            textShadow: "0 2px 6px rgba(208, 188, 188, 0.6)",
                            transition: "color 0.3s ease, opacity 0.3s ease",
                          }}
                        >
                          {product.productName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
