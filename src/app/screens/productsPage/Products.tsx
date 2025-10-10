import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product, ProductInquiry } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
    onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
const [productSearch, setProductSearch] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.CREAM,
        search: "",
      });
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLERS **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  }

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Box className="product-title">Sadiya Cosmetics</Box>
            <Box className="product-info">
              <TextField
                className="product-type"
                placeholder="Type here"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchProductHandler();
                }}
                variant="outlined"
                size="small"
                sx={{
                  "& fieldset": { border: "none" },
                }}
              />
              <Button
                className="product-button"
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={searchProductHandler}
                sx={{
                  borderRadius: "35px",
                  "&:hover": {
                    bgcolor: "#1e1d1a",
                  },
                }}
              >
                SEARCH
              </Button>
            </Box>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button variant={"contained"}  
              className={"order"}
              color={
                  productSearch.order === "createdAt" ? "primary" : "secondary"
              }
              onClick={() => searchOrderHandler("createdAt")}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                className={"order"}
                color={
                  productSearch.order === "productPrice"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchOrderHandler("productPrice")}
              >
                Price
              </Button>

              <Button
                variant={"contained"}
                className={"order"}
                color={
                  productSearch.order === "productViews"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchOrderHandler("productViews")}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                <Button variant={"contained"} color={productSearch.productCollection === ProductCollection.COLLAGEN
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.COLLAGEN)
                  }
                >
                  Collagen
                </Button>

                <Button variant={"contained"} color={
                    productSearch.productCollection ===
                    ProductCollection.VITAMIN
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.VITAMIN)
                  }
                >
                  Vitamin
                </Button>

                <Button variant={"contained"} color={
                    productSearch.productCollection ===
                    ProductCollection.CREAM
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.CREAM)
                  }
                >
                  Cream
                </Button>

                <Button variant={"contained"} color={
                    productSearch.productCollection ===
                    ProductCollection.SPRAY
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SPRAY)
                  }
                >
                  Spray
                </Button>
                <Button variant={"contained"} color={
                    productSearch.productCollection === ProductCollection.CLEANSING
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.CLEANSING)
                  }
                >
                  Cleansing
                </Button>
              </div>
            </Stack>
            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.CLEANSING ||
                    ProductCollection.SPRAY ||
                    ProductCollection.CREAM
                      ? product.productVolume + " m.l"
                      : product.productSize + " normal";
                  return (
                    <Stack key={product._id} className="product-card"
                      onClick={() => chooseDishHandler(product._id)}>
                      <Stack
                        className="product-img"
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className="product-sale">{sizeVolume}</div>
                        <div className="btn-vs-view">
                          <Button className="shop-btn"
                           onClick={(e) => {
                            onAdd({
                              _id: product._id,
                              quantity: 1,
                              name: product.productName,
                              price: product.productPrice,
                              image: product.productImages[0],
                            });
                            e.stopPropagation();
                          }}
                          >
                            <img
                              className="shop-btn-img"
                              src="/icons/shopping-cart.svg"
                            />
                          </Button>
                          <Button className="view-btn">
                            <Badge
                              badgeContent={product.productViews}
                              color="secondary"
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  color:
                                    product.productViews === 0
                                      ? "gray"
                                      : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </div>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-number">
                          <MonetizationOnIcon
                            sx={{ width: "32px", height: "31px" }}
                          />
                          {product.productPrice}
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
              count={products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "red",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#cc0000",
                      },
                    },
                  }}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>
      <div className={"brands-logo"}>
        <Container>
          <Stack className="sub">
            <Box className="subtitle"> Our Partner Brands</Box>
          </Stack>
          <Stack className="brand-imgs">
            <Box>
              <img src="/img/gurme.webp" alt="banner" className="brand-img" />
            </Box>
            <Box className="brand-img">
              <img src="/img/seafood.webp" alt="banner" className="brand-img" />
            </Box>
            <Box className="brand-img">
              <img src="/img/sweets.webp" alt="banner" className="brand-img" />
            </Box>
            <Box className="brand-img">
              <img src="/img/doner.webp" alt="banner" className="brand-img" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-aria"}>
            <Box className={"title"}>Our adrress</Box>
            <iframe
              style={{ marginTop: "80px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.126845295019!2d-122.41941568468162!3d37.7749297797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c13d72a4d%3A0xe4e46e7b6e23996b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620935558731!5m2!1sen!2sus"
              width="1320"
              height={"500"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
