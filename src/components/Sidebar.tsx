import { useLocation } from "react-router-dom";
import { Home, Book, Timeline, Person } from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import {
  LogoWrapper,
  NavElement,
  NavLinks,
  SidebarContainer,
} from "../styles/mui";
import useSidebar from "../viewmodels/useSidebar";

const Links = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Quizzes", icon: <Book />, path: "/quizzes" },
  { text: "Statistics", icon: <Timeline />, path: "/statistics" },
  { text: "Profile", icon: <Person />, path: "/profile" },
];

export default function Sidebar() {
  const { methods } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();

  return (
    <SidebarContainer>
      {!isMobile && (
        <LogoWrapper>
          <img src="./svg/logo.svg" alt="App Logo" />
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Liveedu
          </Typography>
        </LogoWrapper>
      )}

      <NavLinks>
        {Links.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <NavElement
              key={index}
              to={link.path}
              onClick={() => methods.updatePage(index + 1)}
              isActive={isActive}
            >
              {link.icon} {!isMobile && link.text}
            </NavElement>
          );
        })}
      </NavLinks>
    </SidebarContainer>
  );
}
