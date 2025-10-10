import React from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(
  retrieveProducts,
  ( products ) => ({ products })
);


const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];


export default function Products() {
  return <div className={"products"}>
    <Container>
      <Stack flexDirection={"column"} alignItems={"center"}>
        <Stack className="avatar-big-box">
          <Box className="product-title">Sadiya Cosmetics</Box>
          <Box className="product-info" >
            <TextField
              className="product-type"
              placeholder="Type here"
              variant="outlined"
              size="small"
              sx={{
                '& fieldset': { border: 'none' },
              }}
            />
            <Button
              className="product-button"
              variant="contained"
              endIcon={<SearchIcon />}
              sx={{
                borderRadius: '35px',
                '&:hover': {
                  bgcolor: '#1e1d1a',
                },
              }}
            >
              SEARCH
            </Button>
          </Box>
        </Stack>

        <Stack className={"dishes-filter-section"}>
          <Stack className={"dishes-filter-box"}>
            <Button
              variant={"contained"}
              color={"primary"}
              className="order"
            >
              New
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className="order"
            >
              Price
            </Button>

            <Button
              variant={"contained"}
              color={"secondary"}
              className="order"
            >
              Views
            </Button>
          </Stack>
        </Stack>

        <Stack className={"list-category-section"}>
          <Stack className={"product-category"}>
            <div className={"category-main"}>
              <Button variant={"contained"} color={"secondary"}>
                Other
              </Button>

              <Button variant={"contained"} color={"secondary"}>
                Desssert
              </Button>

              <Button variant={"contained"} color={"secondary"}>
                Drink
              </Button>

              <Button variant={"contained"} color={"secondary"}>
                Salad
              </Button>
              <Button variant={"contained"} color={"primary"}>
                Dish
              </Button>
            </div>
          </Stack>
          <Stack className={"product-wrapper"}>
            {products.length !== 0 ? (
              products.map((product, index) => {
                return (
                  <Stack key={index} className="product-card">
                    <Stack
                      className="product-img"
                      sx={{ backgroundImage: `url(${product.imagePath})` }}
                    >
                      <div className="product-sale"></div>
                      <div className="btn-vs-view">
                      <Button className="shop-btn">
                        <img className="shop-btn-img"
                          src="/icons/shopping-cart.svg"
                        />
                      </Button>
                      <Button className="view-btn">
                        <Badge badgeContent={1} color="secondary">
                          <RemoveRedEyeIcon
                            sx={{
                              color:  "gray" ,
                            }}
                          />
                        </Badge>
                      </Button> 
                      </div>
                    </Stack>
                    <Box className="product-desc">
                      <span className="product-title">{product.productName}</span>
                      <div className="product-number">
                      <MonetizationOnIcon sx={{ width: '32px', height: '31px' }} />
                        {12}
                      </div>
                    </Box>
                 
                  </Stack>
                  
                  
                );
              }) 
            ) : (
              <Box className={"no-data"}>Products are not avialable</Box>
            )}
          </Stack>
                  
        </Stack>
        <Stack spacing={2}>
        <Pagination
  count={3}
  renderItem={(item) => (
    <PaginationItem
      slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
      {...item}
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'red',
          color: 'white',
          '&:hover': {
            backgroundColor: '#cc0000', 
          },
        },
      }}
    />
  )}
/>

    </Stack>
      </Stack>
    </Container>

    <div className={"brands-logo"}>
      <Container><Stack className="sub">
        <Box className="subtitle"> Our Family Brands</Box>
        </Stack>
        <Stack className="brand-imgs">
          <Box >
          <img src="/img/gurme.webp" alt="banner" className="brand-img"/>
          </Box>
          <Box className="brand-img">
          <img src="/img/seafood.webp" alt="banner" className="brand-img" />
          </Box>
          <Box className="brand-img">
          <img src="/img/sweets.webp" alt="banner" className="brand-img" />
          </Box>
          <Box className="brand-img">
          <img src="/img/doner.webp" alt="banner"  className="brand-img"/>
          </Box>
        </Stack>
      </Container>
    </div>

    <div className={"address"}>
      <Container>
        <Stack className={"address-aria"}>
          <Box className={"title"}> 
            Our adrress
          </Box>
          <iframe
          style={{marginTop:"80px"}}
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.126845295019!2d-122.41941568468162!3d37.7749297797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c13d72a4d%3A0xe4e46e7b6e23996b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620935558731!5m2!1sen!2sus"
        width="1320"
          height={"500"}
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Stack>
      </Container>
    </div>

  </div>
}