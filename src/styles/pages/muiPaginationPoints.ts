import { Box } from "@mui/system";
import styled from "styled-components";

export const PaginationPointContainer = styled(Box)`
  display: flex;
  gap: 10px;

  @media (min-width: 600px) {
    gap: 15px;
  }
`;

interface PaginationPointProps {
  isActive: boolean;
}

export const PaginationPoint = styled(Box)<PaginationPointProps>`
  width: ${({ isActive }) => (isActive ? "30px" : "10px")};
  height: 10px;
  background: linear-gradient(var(--lilac), var(--blue));
  border-radius: ${({ isActive }) => (isActive ? "50px" : "50%")};
  transition: all 0.3s ease;
  cursor: pointer;

  @media (min-width: 600px) {
    width: ${({ isActive }) => (isActive ? "50px" : "15px")};
    height: 15px;
  }
`;
