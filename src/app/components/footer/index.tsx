import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../css/footer.css";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #bcf9efff;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "50px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
             <Box sx={{
    width: 200,
    height: 100,
    backgroundImage: 'url("/img/sadiiyya.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
  }}></Box>

            <Box className={"foot-desc-txt"}>
              Focusing on natural beauty and modern skincare, Sadiya Cosmetic aims to bring confidence and elegance back to every woman.
With a perfect harmony of science and nature, Sadiya Cosmetic creates a unique experience that highlights your natural glow.
            </Box> <hr></hr><hr></hr>
           
  <div className="card-social">
              <span>Social</span>
              <a className="social-link"
              href="https://t.me/sadiyakoreakosmetik"
              target="_blank"
  rel="noopener noreferrer">
                <svg
                  fill="#0088cc"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48px"
                  height="48px"
                >
                  <path d="M9.999 15.199l-.398 5.601c.569 0 .815-.244 1.115-.535l2.672-2.584 5.545 4.062c1.015.561 1.738.266 2.004-.938l3.63-17.038c.37-1.701-.618-2.366-1.732-1.951L1.14 9.901c-1.682.66-1.657 1.607-.302 2.035l5.476 1.709 12.686-8.021c.6-.385 1.145-.172.696.247L9.999 15.199z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="https://wa.me/998901234567"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#25D366"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2C6.55 2 2 6.55 2 12.04C2 13.96 2.57 15.74 3.55 17.21L2 22L6.9 20.48C8.31 21.33 10.09 21.84 12.04 21.84C17.52 21.84 22.07 17.29 22.07 11.81C22.07 6.32 17.52 1.77 12.04 1.77M12.04 20.14C10.37 20.14 8.79 19.64 7.48 18.74L7.24 18.58L4.56 19.46L5.47 16.88L5.29 16.61C4.32 15.22 3.77 13.67 3.77 12.04C3.77 7.61 7.61 3.77 12.04 3.77C16.47 3.77 20.31 7.61 20.31 12.04C20.31 16.47 16.47 20.14 12.04 20.14M16.09 14.52C15.92 14.43 14.86 13.91 14.67 13.83C14.48 13.76 14.33 13.72 14.18 13.94C14.04 14.17 13.56 14.76 13.43 14.91C13.3 15.05 13.16 15.07 12.93 14.97C12.69 14.86 11.93 14.61 11.05 13.78C10.32 13.1 9.83 12.29 9.7 12.06C9.57 11.82 9.69 11.69 9.8 11.59C9.91 11.49 10.04 11.33 10.13 11.2C10.23 11.06 10.27 10.95 10.36 10.78C10.46 10.61 10.42 10.47 10.35 10.36C10.27 10.25 9.84 9.15 9.63 8.64C9.43 8.14 9.22 8.21 9.07 8.2C8.93 8.19 8.76 8.19 8.58 8.19C8.39 8.19 8.09 8.26 7.83 8.52C7.56 8.78 6.91 9.38 6.91 10.58C6.91 11.78 7.79 12.96 7.91 13.13C8.03 13.3 9.65 15.63 12 16.72C13.09 17.22 13.87 17.47 14.39 17.61C14.92 17.75 15.42 17.71 15.81 17.65C16.2 17.59 17.09 17.12 17.27 16.56C17.45 16 17.45 15.5 17.38 15.39C17.3 15.28 17.26 15.2 17.09 15.12C16.92 15.04 16.25 14.6 16.09 14.52Z" />
                </svg>
              </a>
              <a className="social-link" href="#">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1998/xlink"
                  viewBox="0 0 461.001 461.001"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        style={{ fill: "#F61C0D" }}
                        d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </a>

              <a
                className="social-link"
                href="https://facebook.com"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 
    1.326 24H12.82v-9.294H9.692V11.41h3.128V8.713c0-3.1 
    1.893-4.788 4.659-4.788 1.325 0 2.463.099 
    2.795.143v3.24l-1.918.001c-1.504 
    0-1.796.716-1.796 1.765v2.316h3.587l-.467 
    3.296h-3.12V24h6.116C23.403 
    24 24 23.403 24 22.674V1.326C24 
    .597 23.403 0 22.675 0z"
                  />
                </svg>
              </a>

              <a className="social-link" href="#">
                <svg
                  fill="#000000"
                  viewBox="0 0 512 512"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Bo'limlar</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  {authMember && <Link to="/orders">Orders</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <span>L.</span>
                    <div>Downtown, Dubai</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>P.</span>
                    <div>+971 4 554 7777</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>E.</span>
                    <div>devexuz@gmail.com</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>H.</span>
                    <div>Visit 24 hours</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{
            border: "2px solid #0a0a0aff",
            width: "100%",
            opacity: "0.2",
          }}
          sx={{ mt: "30px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
