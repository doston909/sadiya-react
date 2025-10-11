import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Divider,
  Paper,
  Typography,
  Modal,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Settings from "./Settings";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { MemberType } from "../../../lib/enums/member.enum";
import "../../../css/userPage.css";

export default function UserPage() {
  const history = useHistory();
  const { authMember } = useGlobals();
  const [openSettings, setOpenSettings] = useState(false);

  if (!authMember) history.push("/");

  return (
    <>
      <Box
        sx={{
          minHeight: "150px",
          background: "linear-gradient(135deg, #e3f2fd, #ede7f6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "800px",
            width: "100%",
            mx: "auto", // markazda joylash
          }}
        >
          <Paper
            elevation={6}
            sx={{
              borderRadius: "40px",
              padding: "50px 20px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                mb: 3,
              }}
            >
              <img
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember.memberImage}`
                    : "/icons/default-user.svg"
                }
                alt="user-avatar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  background: "#1976d2",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    authMember?.memberType === MemberType.SHOP
                      ? "/icons/restaurant.svg"
                      : "/icons/user-badge.svg"
                  }
                  style={{ width: 24, height: 24 }}
                />
              </Box>
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 700, color: "#212121" }}>
              {authMember?.memberNick}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#5c6bc0",
                fontWeight: 500,
                textTransform: "capitalize",
                mt: 0.5,
              }}
            >
              {authMember?.memberType}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#757575", mt: 1, mb: 2, maxWidth: 300 }}
            >
              {authMember?.memberAddress ?? "No address provided"}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#616161",
                fontStyle: "italic",
                mt: 1,
                mb: 3,
                maxWidth: 400,
              }}
            >
              {authMember?.memberDesc ?? "No description available"}
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              sx={{ color: "#1976d2", mb: 4, fontSize: "28px" }}
            >
              <FacebookIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#3b5998" } }}
              />
              <InstagramIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#E1306C" } }}
              />
              <TelegramIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#0088cc" } }}
              />
              <YouTubeIcon
                sx={{ cursor: "pointer", "&:hover": { color: "#FF0000" } }}
              />
            </Stack>

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "30px",
                padding: "12px 40px",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                background: "linear-gradient(135deg, #2196f3 0%, #3f51b5 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #283593 100%)",
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
              }}
              onClick={() => setOpenSettings(true)}
            >
              Edit My Account
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* 🔹 Modal oynasi */}
      <Modal
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        sx={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "700px",
            background: "rgba(255,255,255,0.9)",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
            p: 4,
            position: "relative",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ fontWeight: 600, mb: 3, color: "#37474f" }}
          >
            Edit Profile
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {/* ✅ Settings form */}
          <Settings onClose={() => setOpenSettings(false)} />

          <Box textAlign="center" mt={3}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpenSettings(false)}
              sx={{
                borderRadius: "30px",
                px: 5,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
