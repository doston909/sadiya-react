import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MonetizationOn } from "@mui/icons-material";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className="top-title">
              <Box className="top-text">Sadiya Online Shop</Box>
              <Box className="single-search">
                <input
                  className="single-search-input"
                  placeholder="Type here"
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="single-button-search"
                >
                  Search
                  <SearchIcon />
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack className={"dishes-filter-section"}>
          <Stack className={"dishes-filter-box"}>
            <Button variant={"contained"} color={"primary"} className={"order"}>
              New
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >
              Price
            </Button>
            <Button
              variant={"contained"}
              color={"secondary"}
              className={"order"}
            >
              Views
            </Button>
          </Stack>
        </Stack>
        <Stack className={"list-category-section"}>
          <Stack className={"product-category"}>
            <div className={"category-main"}>
              <Button variant={"contained"} color={"primary"}>
                Collagen
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Vitamin
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Spray
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Cream
              </Button>
              <Button variant={"contained"} color={"secondary"}>
                Cleansing
              </Button>
            </div>
          </Stack>
          <Stack className={"product-wrapper"}>
            {products.length !== 0 ? (
              products.map((product, index) => {
                return (
                  <Stack key={index} className={"product-card"}>
                    <Stack
                      className={"product-img"}
                      sx={{
                        position: "relative", 
                        backgroundImage: `url(${product.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        "&:hover .view-btn": {
                          opacity: 1,
                          visibility: "visible",
                        },
                      }}
                    >
                      <div className={"product-sale"}>Original</div>

                      <Button className={"shop-btn"} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img
                          src={"/icons/shopping-cart.svg"}
                          style={{ width: "20px", height: "20px" }}
                          alt="Cart"
                        />
                        <Badge badgeContent={20} color="secondary">
                          <RemoveRedEyeIcon sx={{ color: "gray" }} />
                        </Badge>
                      </Button>

                      <Button
                        className="view-btn"
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          opacity: 0,
                          visibility: "hidden",
                          transition: "opacity 0.3s ease",
                          zIndex: 2,
                        }}
                      >
                        
                      </Button>
                    </Stack>
                    <Box className={"product-desc"}>
                      <span className={"product-title"}>
                        {product.productName}
                      </span>
                      <div className={"product-desc"}>
                        <MonetizationOnIcon />15
                      </div>
                      
                    </Box>
                  </Stack>
                );
              })
            ) : (
              <Box className={"no-data"}>Products are not available</Box>
            )}
          </Stack>
        </Stack>

        <Stack className={"pagination-section"}>
          <Pagination
            count={10}
            page={1}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color={"primary"}
              />
            )}
          />
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Container>
          <Box className="brand-text">Our Partners Brands </Box>
          <Stack className="brand-cards">
            <Box className="brand-card">
              <img src="/img/seafood.webp" alt="" />
            </Box>
            <Box className="brand-card">
              <img src="/img/doner.webp" alt="" />
            </Box>
            <Box className="brand-card">
              <img src="/img/sweets.webp" alt="" />
            </Box>
            <Box className="brand-card">
              <img src="/img/gurme.webp" alt="" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address </Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik"
              height="500px"
              width="1320px"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
 );
}