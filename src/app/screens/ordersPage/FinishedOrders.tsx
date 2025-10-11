import React, { useState } from "react";
import { Stack, Box, Button } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "./selector";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);

export default function FinishedOrders() {
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  const [orders, setOrders] = useState(finishedOrders || []);

  const handleDelete = (orderId: string) => {
    setOrders(orders.filter((order: Order) => order._id !== orderId));
  };

  return (
    <TabPanel value={"3"}>
      <Stack>
        {orders?.map((order: Order) => {
          return (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order?.productData?.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = product?.productImages?.[0]
                    ? `${serverApi}/${product.productImages[0]}`
                    : "/icons/default-product.svg";

                  return (
                    <Box key={item._id} className={"orders-name-price"}>
                       <img
                        src={imagePath}
                        className={"order-dish-img"}
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "50%",
                           marginTop: "50px",
                        }}  />
                      <p className={"title-dish"}>{product.productName}</p>
                      <Box className={"price-box"}>
                        <p>${item.itemPrice}</p>
                        <img src={"/icons/close.svg"} />
                        <p>{item.itemQuantity}</p>
                        <img src={"/icons/pause.svg"} />
                        <p style={{ marginLeft: "5px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src={"/icons/pause.svg"} />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
              </Box>

              {/* 🔹 Faqat shu qo‘shildi */}
              <Box textAlign="right" mt={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          );
        })}

        {!orders || (orders.length === 0 && (
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <img
              src={"/icons/noimage-list.svg"}
              style={{ width: 300, height: 300 }}
            />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}

