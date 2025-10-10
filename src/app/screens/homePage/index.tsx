import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularProducts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularProducts } from "./slice";
import { retrievePopularProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import OurService from "./Ourservice";
import "../../../css/home.css";

import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";


/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
});


export default function HomePage() {
  const { setPopularProducts } = actionDispatch(useDispatch());

  useEffect(() => {
    // Backend server data fetch
    const product = new ProductService();
    product.getProducts({
      page: 1,
      limit: 4,
      order: "productViews",
      productCollection: ProductCollection.CREAM,
    })
    .then((data) => {
      setPopularProducts(data);
    })
    .catch((err) => console.log(err));
    product.getProducts({
      page: 1,
      limit: 4,
      order: "createdAt",
      productCollection: ProductCollection.CREAM,
    })
    .then((data) => {
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <Advertisement />
      <ActiveUsers />
      <OurService />
      <Events />
    </div>
  );
}