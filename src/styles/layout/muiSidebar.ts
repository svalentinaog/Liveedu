import styled from "@emotion/styled";
import { Link, LinkProps } from "react-router-dom";
import { Box } from "@mui/system";

export const SidebarContainer = styled(Box)`
  width: 300px;
  background: var(--translucent-gradient);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 0;
  gap: 10px;

  img {
    max-width: 100%;
    width: 40px;
  }
`;

export const NavLinks = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

interface NavElementProps extends LinkProps {
  isActive?: boolean;
}

export const NavElement = styled(Link)<NavElementProps>`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  transition: background 0.3s ease, color 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    `
    background: var(--translucent-nav);
     svg {
      fill: var(--blue);
    }
  `} {
    background: transparent;
    svg {
      fill: var(--dark-gray);
    }
  }

  &:hover {
    background: var(--translucent-nav);
    svg {
      fill: var(--lilac);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
