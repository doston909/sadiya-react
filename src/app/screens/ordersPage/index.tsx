import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box, Button, TextField } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        {/* LEFT SIDE */}
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDERS" value="1" />
                  <Tab label="PROCESS ORDERS" value="2" />
                  <Tab label="FINISHED ORDERS" value="3" />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        {/* RIGHT SIDE */}
        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="member-box">
              <div className="order-user-img">
                <img
                  src="/icons/i'm2.jpg"
                  className="order-user-avatar"
                />
                <div className="order-user-icon-box">
                  <img
                    src="/icons/user-badge.svg"
                    className="order-user-prof-img"
                  />
                </div>
              </div>
              <span className="order-user-name">Dave</span>
              <span className="order-user-prof">Engineer</span>
            </Box>

            <Box className="liner" />

            <Box className="order-user-address">
              <LocationOnIcon />
              <span className="spec-address-txt">Dunyo poytaxti Andijon</span>
            </Box>
          </Box>
          <Box className={"order-info-box2"}>
            <input className="card-input" placeholder="Card number:" ></input>
            <div className="cards-box">
              <input className="card-half-input" placeholder="MM/DD:"></input>
              <input className="card-half-input" placeholder="CVV"></input>
            </div>
            <input className="card-input" placeholder="Name:"></input>
            <div className="cards-img">
              <img className="cards-sty" 
              src="/icons/visa.jpeg" />
              <img className="cards-sty" 
              src="/icons/visa1.jpeg" />
              <img className="cards-sty" 
              src="/icons/visa2.jpeg" />
              <img className="cards-sty" 
              src="/icons/visa3.jpeg" />
            </div>
          </Box>
        </Stack>

       

      </Container>
    </div>
  );
}
