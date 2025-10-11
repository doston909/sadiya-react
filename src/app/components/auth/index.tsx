import React, { useState } from "react";
import { T } from "../../../lib/types/common";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField, Button, Typography } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Messages, serverApi } from "../../../lib/config";
import { MemberInput, LoginInput, Member } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
  },
}));

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
  setAuthMember: (member: Member | null) => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose, setAuthMember } = props;
  const classes = useStyles();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [memberImage, setMemberImage] = useState<File | null>(null); // ✅ rasm file uchun state
  const [previewUrl, setPreviewUrl] = useState<string>(""); // ✅ ko‘rsatish uchun

  /** HANDLERS **/
  const handleUsername = (e: T) => setMemberNick(e.target.value);
  const handlePhone = (e: T) => setMemberPhone(e.target.value);
  const handlePassword = (e: T) => setMemberPassword(e.target.value);

  // ✅ Rasm tanlash funksiyasi
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMemberImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // ko‘rsatish uchun
    }
  };

  const handleSignupRequest = async () => {
  try {
    if (!memberNick || !memberPhone || !memberPassword)
      throw new Error(Messages.error3);

    const formData = new FormData();
    formData.append("memberNick", memberNick);
    formData.append("memberPhone", memberPhone);
    formData.append("memberPassword", memberPassword);

    // ✅ Agar foydalanuvchi rasm tanlagan bo‘lsa, qo‘shamiz
    if (memberImage) {
      formData.append("memberImage", memberImage);
    }

    const memberService = new MemberService();
    const result = await memberService.signup(formData); // 👈 formData jo‘natamiz

    setAuthMember(result);
    await sweetTopSmallSuccessAlert("Signup successful!", 1000);
    handleSignupClose();

    // 🔹 Formani tozalaymiz
    setMemberNick("");
    setMemberPhone("");
    setMemberPassword("");
    setMemberImage(null);
    setPreviewUrl("");
  } catch (err) {
    sweetErrorHandling(err);
  }
};


  const handleLoginRequest = async () => {
    try {
      if (!memberNick || !memberPassword)
        throw new Error(Messages.error3);

      const loginInput: LoginInput = { memberNick, memberPassword };
      const memberService = new MemberService();
      const result = await memberService.login(loginInput);

      setAuthMember(result);
      await sweetTopSmallSuccessAlert("Login successful!", 1000);
      handleLoginClose();

      setMemberNick("");
      setMemberPassword("");
    } catch (err) {
      sweetErrorHandling(err);
    }
  };

  return (
    <div>
      {/* === SIGNUP MODAL === */}
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={signupOpen}>
          <Stack className={classes.paper} direction="row" sx={{ width: "820px" }}>
            <ModalImg src={"/img/auth.webp"} alt="signup" />
            <Stack sx={{ ml: "60px", alignItems: "center", width: "100%" }}>
              <h2>Signup Form</h2>

              {/* ✅ Profil rasmi tanlash */}
              <Stack alignItems="center" spacing={2} sx={{ mt: 1, mb: 2 }}>
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #90caf9",
                    }}
                  />
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    (Optional) Add your profile picture
                  </Typography>
                )}
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<CloudUploadIcon />}
                  sx={{ borderRadius: "20px", textTransform: "none" }}
                >
                  Upload Image
                  <input hidden type="file" accept="image/*" onChange={handleImageSelect} />
                </Button>
              </Stack>

              <TextField
                sx={{ mb: 2 }}
                label="Username"
                variant="outlined"
                onChange={handleUsername}
              />
              <TextField
                sx={{ mb: 2 }}
                label="Phone number"
                variant="outlined"
                onChange={handlePhone}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
              />
              <Fab
                sx={{ mt: 3, width: "130px" }}
                variant="extended"
                color="primary"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} /> Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      {/* === LOGIN MODAL === */}
      <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={loginOpen}>
          <Stack className={classes.paper} direction="row" sx={{ width: "700px" }}>
            <ModalImg src={"/img/auth.webp"} alt="login" />
            <Stack sx={{ ml: "65px", mt: "25px", alignItems: "center" }}>
              <h2>Login Form</h2>
              <TextField
                label="Username"
                variant="outlined"
                sx={{ my: "10px" }}
                onChange={(e) => setMemberNick(e.target.value)}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setMemberPassword(e.target.value)}
              />
              <Fab
                sx={{ mt: 3, width: "120px" }}
                variant="extended"
                color="primary"
                onClick={handleLoginRequest}
              >
                <LoginIcon sx={{ mr: 1 }} /> Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
