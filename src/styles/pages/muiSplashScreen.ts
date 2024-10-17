import styled from "@emotion/styled";
import { Box, keyframes } from "@mui/material";

export const FullScreenBox = styled(Box)({
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--white-app)",
  position: "relative",
});

// Animación flotante para el logo
export const floatAnimation = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  `;

export const LogoContainer = styled(Box)({
  width: "150px",
  height: "150px",
  animation: `${floatAnimation} 3s ease-in-out infinite`,
});

export const LogoImage = styled("img")({
  width: "100%",
  height: "auto",
});
