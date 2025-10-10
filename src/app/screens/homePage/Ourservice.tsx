import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../../../css/home.css";

export default function OurService() {
  const services = [
    {
      title: "Fast Delivery",
      desc: "We deliver your order within 2-3 days.",
      anim: "/animations/delivery-service.lottie",

    },
    {
      title: "Natural Ingredients",
      desc: "Only high-quality, fresh ingredients used.",
      anim: "/animations/vegan.lottie",
    },
    {
      title: "Customer Support",
      desc: "24/7 online support available anytime.",
      anim: "/animations/Contact-Us.lottie",
    },
  ];

  return (
    <div className="our-service-frame">
      <Container>
        <Stack className="our-service-main" alignItems="center" spacing={4}>
          <Typography className="category-title">Our Service</Typography>

          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            flexWrap="wrap"
          >
            {services.map((service, i) => (
              <Box key={i} className="service-card">
            
                <Typography className="service-title">
                  {service.title}
                </Typography>

               
                <Typography className="service-desc">
                  {service.desc}
                </Typography>

                <div >
                  <DotLottieReact
                    src={service.anim}
                    loop
                    autoplay
                    style={{ width: 250, height: 300 }}
                  />
                </div>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

