import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const MainButton = styled(Button)({
  width: "100%",
  color: "var(--white-app)",
  background: "linear-gradient(var(--lilac), var(--blue))",
  textTransform: "capitalize",
  borderRadius: "16px",
  padding: 16,
  transition: "all 0.3s ease",
  boxShadow: "0px 4px 2px -4px var(--blue-shadow)",
  "&:hover": {
    boxShadow: "0px 4px 20px var(--blue-shadow)",
  },
});

// onboarding
export const btnNextMobileNone = {
  display: { sm: "none", xs: "block" },
};
