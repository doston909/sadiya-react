import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useGlobals } from "../../hooks/useGlobals";
import { useState } from "react";
import { MemberUpdateInput } from "../../../lib/types/member";
import { T } from "../../../lib/types/common";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { Messages, serverApi } from "../../../lib/config";
import MemberService from "../../services/MemberService";

interface SettingsProps {
  onClose?: () => void;
}

function Settings({ onClose }: SettingsProps) {
  const { authMember, setAuthMember } = useGlobals();
  const [memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember.memberImage}`
      : "/icons/default-user.svg"
  );

  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>({
    memberNick: authMember?.memberNick,
    memberPhone: authMember?.memberPhone,
    memberAddress: authMember?.memberAddress,
    memberDesc: authMember?.memberDesc,
    memberImage: authMember?.memberImage,
  });

  /** HANDLERS **/
  const handleChange =
    (key: keyof MemberUpdateInput) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setMemberUpdateInput({ ...memberUpdateInput, [key]: e.target.value });
    };

  const handleImageViewer = (e: T) => {
    const file = e.target.files[0];
    const fileType = file.type;
    const validateImageTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validateImageTypes.includes(fileType)) {
      sweetErrorHandling(new Error(Messages.error5));
      return;
    }

    memberUpdateInput.memberImage = file;
    setMemberUpdateInput({ ...memberUpdateInput });
    setMemberImage(URL.createObjectURL(file));
  };

  const handleSubmitButton = async () => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      if (
        !memberUpdateInput.memberNick ||
        !memberUpdateInput.memberPhone ||
        !memberUpdateInput.memberAddress ||
        !memberUpdateInput.memberDesc
      ) {
        throw new Error(Messages.error3);
      }

      const member = new MemberService();
      const result = await member.updateMember(memberUpdateInput);
      setAuthMember(result);

      await sweetTopSmallSuccessAlert("Profile updated successfully!", 700);

      // ✅ Modalni yopamiz
      if (onClose) onClose();
    } catch (err: any) {
      console.log(err.response?.data || err.message || err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: "20px",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Stack direction="row" alignItems="center" gap={3} sx={{ mb: 4 }}>
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
            border: "3px solid #90caf9",
          }}
        >
          <img
            src={memberImage}
            alt="user-avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Stack spacing={1}>
          <Typography fontWeight={600}>Upload Image</Typography>
          <Typography variant="body2" color="text.secondary">
            JPG, JPEG, PNG formats only
          </Typography>
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudDownloadIcon />}
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              fontWeight: 500,
              background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
              "&:hover": {
                background: "linear-gradient(135deg, #2196f3, #1565c0)",
              },
            }}
          >
            Upload
            <input type="file" hidden onChange={handleImageViewer} />
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <TextField
          label="Username"
          fullWidth
          value={memberUpdateInput.memberNick ?? ""}
          onChange={handleChange("memberNick")}
          variant="outlined"
          InputProps={{ sx: { borderRadius: "12px" } }}
        />
        <Stack direction="row" spacing={2}>
          <TextField
            label="Phone"
            fullWidth
            value={memberUpdateInput.memberPhone ?? ""}
            onChange={handleChange("memberPhone")}
            variant="outlined"
            InputProps={{ sx: { borderRadius: "12px" } }}
          />
          <TextField
            label="Address"
            fullWidth
            value={memberUpdateInput.memberAddress ?? ""}
            onChange={handleChange("memberAddress")}
            variant="outlined"
            InputProps={{ sx: { borderRadius: "12px" } }}
          />
        </Stack>
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={memberUpdateInput.memberDesc ?? ""}
          onChange={handleChange("memberDesc")}
          variant="outlined"
          InputProps={{ sx: { borderRadius: "12px" } }}
        />
      </Stack>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmitButton}
          sx={{
            borderRadius: "30px",
            px: 6,
            py: 1.5,
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            background: "linear-gradient(135deg, #4caf50, #2e7d32)",
            boxShadow: "0 8px 20px rgba(46,125,50,0.3)",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 25px rgba(46,125,50,0.4)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
}

export default Settings;

