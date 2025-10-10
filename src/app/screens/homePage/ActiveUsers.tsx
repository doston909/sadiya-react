import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";


const activeUsers = [
  { memberNick: "Dostonbek", memberImage: "img/martin.webp" },
  { memberNick: "Umarjon", memberImage: "img/justin.webp" },
  { memberNick: "Gulixon", memberImage: "img/rose.webp" },
  { memberNick: "Sardorbek", memberImage: "img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="homepage">
      <div className="active-users-frame">
        <Container>
        <Stack className="main" alignItems="center">
            <Box className="category-title">Active Users</Box>

            <Stack className="cards-frame">
              <CssVarsProvider>
                {activeUsers.length ? (
                  activeUsers.map((ele, index) => (
                    <Card
  key={index}
  variant="outlined"
  className="card"
  sx={{
    backgroundColor: "transparent !important", // 🔹 default holatda
    transition: "none !important",
    transform: "none !important",
    boxShadow: "none !important",
    "&:hover": {
      backgroundColor: "transparent !important", // 🔹 hover paytida ham
      transform: "none !important",
      boxShadow: "none !important",
    },
  }}
>

                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.memberImage} alt={ele.memberNick} />
                        </AspectRatio>
                      </CardOverflow>
                      <Typography className="member-nickname">
                        {ele.memberNick}
                      </Typography>
                    </Card>
                  ))
                ) : (
                  <Box className="no-data">No Active Users!</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
