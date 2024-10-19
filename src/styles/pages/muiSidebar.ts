import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box } from "@mui/system";

export const SidebarContainer = styled(Box)`
  width: 250px;
  background-color: #f4f4f4;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px; // Altura del footer
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const NavElement = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
