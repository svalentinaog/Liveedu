import { Home, Book, Timeline, Person } from "@mui/icons-material";
import useSidebar from "../viewmodels/useSidebar";
import { useMediaQuery } from "@mui/material";
import { NavElement, SidebarContainer } from "../styles/mui";

const Links = [
  { text: "Home", icon: <Home />, path: "/home" },
  { text: "Courses", icon: <Book />, path: "/courses" },
  { text: "Progress", icon: <Timeline />, path: "/progress" },
  { text: "Profile", icon: <Person />, path: "/profile" },
];

export default function Sidebar() {
  const { methods } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <SidebarContainer>
      {isMobile
        ? Links.map((link, index) => (
            <NavElement
              key={index}
              to={link.path}
              onClick={() => methods.updatePage(index + 1)}
            >
              {link.icon}
            </NavElement>
          ))
        : Links.map((link, index) => (
            <NavElement
              key={index}
              to={link.path}
              onClick={() => methods.updatePage(index + 1)}
            >
              {link.icon} {link.text}
            </NavElement>
          ))}
    </SidebarContainer>
  );
}
