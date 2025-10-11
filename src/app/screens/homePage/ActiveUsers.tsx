import React, { useEffect } from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { CssVarsProvider, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { setTopUsers } from "./slice";
import MemberService from "../../services/MemberService";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),
});

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { setTopUsers } = actionDispatch(useDispatch());
  const { topUsers } = useSelector(topUsersRetriever);

  useEffect(() => {
    const memberService = new MemberService();
    memberService
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((err) => console.log("Top users error:", err));
  }, []);

return (
  <div
    style={{
      width: "100%",
      height: "745px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      background: "rgba(231, 181, 248, 0.35)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    }}
  >
    <Container>
      <Stack
        sx={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Title */}
        <Box
          sx={{
            marginTop: "50px",
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "43px",
          }}
        >
          Active Users
        </Box>

        <Stack
          sx={{
            height: "300px",
            marginTop: "47px",
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CssVarsProvider>
            {topUsers.length !== 0 ? (
              topUsers.map((member: Member) => {
                const imagePath = `${serverApi}/${member.memberImage}`;
                return (
                  <Card
                    key={member._id}
                    sx={{
                      position: "relative",
                      height: "300px",
                      width: "300px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "20px",
                      overflow: "hidden",
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                      },
                      "&:hover .member-name": {
                        opacity: 1, 
                      },
                    }}
                  >
                    <CardCover>
                      <img
                        src={imagePath}
                        alt={member.memberNick}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </CardCover>

                 
                    <CardContent
                      className="member-name"
                      sx={{
                        position: "absolute",
                        bottom: "5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        background: "rgba(19, 20, 20, 0.5)",
                        borderRadius: "10px",
                        padding: "6px 14px",
                        opacity: 0, // 🔹 defaultda yashirin
                        transition: "opacity 0.4s ease", // yumshoq chiqadi
                      }}
                    >
                      <Typography
                        textColor="#ffffffff"
                        sx={{
                          fontWeight: 600,
                          fontSize: "28px",
                          textShadow: "0 2px 6px rgba(208,188,188,0.6)",
                        }}
                      >
                        {member.memberNick}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <Box sx={{ color: "#555", fontSize: "18px" }}>
                No Active Users!
              </Box>
            )}
          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
);


}
