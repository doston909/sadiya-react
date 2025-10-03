import { Box, Container, Stack } from "@mui/material";
import  Divider from "../../components/divider";

export default function Statistics() {
    return (
     <div className={"static-frame"}>
        <Container>
            <Stack className="info">
                <Stack className="static-box">
                    <Box className="static-num">12</Box>
                    <Box className="static-text">Partners</Box>
                </Stack>

                <Divider height="64" width="2" bg="#1e1a13ff" />
                
                <Stack className="static-box">
                    <Box className="static-num">8</Box>
                    <Box className="static-text">Achievements</Box>
                </Stack>

                <Divider height="64" width="2" bg="#1e1a13ff" />

                <Stack className="static-box">
                    <Box className="static-num">100+</Box>
                    <Box className="static-text">Products</Box>
                </Stack>

                <Divider height="64" width="2" bg="#1e1a13ff" />

                <Stack className="static-box">
                    <Box className="static-num">2000+</Box>
                    <Box className="static-text">Custums</Box>
                </Stack>
            </Stack>
        </Container>
     </div>
    );
}