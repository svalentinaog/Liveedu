import { Drawer, Link } from "@mui/material";
import { styled } from "@mui/system";

export const StyledDrawer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "#F3F7FF",
  },
});

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  "&.Mui-selected": {
    backgroundColor: "#E9EFFF",
  },
}));

export const LayoutContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 240,
  "@media (max-width: 600px)": {
    marginLeft: 0,
  },
}));

export const Footer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#F3F7FF",
  padding: theme.spacing(2),
}));
