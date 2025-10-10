import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularProducts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularProducts, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import OurService from "./Ourservice";
import "../../../css/home.css";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";

import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";


/** REDUX SLICE & SELECTOR **/
  const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});



export default function HomePage() {
  const { setPopularProducts, setTopUsers } = actionDispatch(useDispatch());

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