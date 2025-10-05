import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";

const list = [
  { productName: "Lavash", imagePath: "img/lavash.webp" },
  { productName: "Katlet", imagePath: "img/cutlet.webp" },
  { productName: "Kebab", imagePath: "img/kebab.webp" },
  { productName: "Kebab", imagePath: "img/kebab-fresh.webp" },
];

export default function PopularProducts() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Products</Box>
          <Stack className="cards-frame">
            {list.length !== 0 ? (
              list.map((ele, index) => {
                return (
                  <CssVarsProvider key={index}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={ele.imagePath} alt="" />
                      </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection="row"
                          justifyContent="space-between" // ikki element orasini to‘liq ochadi
                          alignItems="center" // vertikal markazlash
                          gap="20px"
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            sx={{ fontWeight: "md" }} // mb olib tashlandi
                          >
                            {ele.productName}
                          </Typography>

                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px", // icon bilan text orasiga bo‘shliq
                            }}
                          >
                            20
                            <VisibilityIcon sx={{ fontSize: 25 }} />
                          </Typography>
                        </Stack>
                      </CardContent>
                      <CardOverflow
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          py: 1.5,
                          px: "var(--Card-padding)",
                          borderTop: "1px solid",
                          height: "6-px",
                        }}
                      >
                        <Typography
                          startDecorator={<DescriptionOutlinedIcon />}
                          textColor="neutral.300"
                        >
                          best-selling
                        </Typography>
                      </CardOverflow>
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
