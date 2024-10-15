import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  Hidden,
} from "@mui/material";
import { Home, Book, Timeline, Person } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";

// Styles (Pendiente mover a mui.ts)
const StyledDrawer = styled(Drawer)({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    backgroundColor: "#F3F7FF",
  },
});

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  "&.Mui-selected": {
    backgroundColor: "#E9EFFF",
  },
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 240, 
  '@media (max-width: 600px)': {
    marginLeft: 0, 
  }
}));

const Footer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#F3F7FF",
  padding: theme.spacing(2),
}));
// end Styles

const menuItems = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Courses", icon: <Book />, path: "/courses" },
  { text: "Progress", icon: <Timeline />, path: "/progress" },
  { text: "Profile", icon: <Person />, path: "/profile" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <LayoutContainer>
      <Hidden smDown>
        <StyledDrawer variant="permanent" anchor="left">
          <Typography
            variant="h5"
            sx={{ padding: 4, fontWeight: "bold", textAlign: "center" }}
          >
            Liveedu
          </Typography>
          <List>
            {menuItems.map((item) => (
              <StyledLink
                to={item.path}
                key={item.text}
                className={
                  location.pathname === item.path ? "Mui-selected" : ""
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText sx={{ color: "#4B4B4B" }} primary={item.text} />
              </StyledLink>
            ))}
          </List>
        </StyledDrawer>
      </Hidden>

      <Content>{children}</Content>

      <Hidden smUp>
        <Footer>
          {menuItems.map((item) => (
            <StyledLink to={item.path} key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
            </StyledLink>
          ))}
        </Footer>
      </Hidden>
    </LayoutContainer>
  );
}
