import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularProducts";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import sos from "../../assets/img/sos.webp";
import OurService from "./Ourservice";


export default function HomePage() {
    return ( <div
      className="homepage"
      style={{
        backgroundImage: `url(${sos})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
    >
        <Statistics />
        <PopularDishes />
        <Advertisement />
        <ActiveUsers />
        <OurService />
        <Events />
    </div>
    );
}