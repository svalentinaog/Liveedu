import { Box, Typography } from "@mui/material";
import { MainButton } from "../styles/mui";
import { useNavigate } from "react-router-dom";

export default function Completion() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">Has completado todos los tests</Typography>
      <MainButton onClick={() => navigate("/home")}>
        Volver al Inicio
      </MainButton>
    </Box>
  );
}
