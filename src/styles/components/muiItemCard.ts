import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ItemCardContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 16px;
  gap: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0 20px 0 20px;

  &:hover {
    background-color: var(--translucent-lilac);
  }
`;

export const PersonalInfoCardContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--translucent-lilac);
  }

  @media (min-width: 960px) {
    padding-right: 16px;
  }
`;

export const ItemContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 960px) {
    padding: 0;
  }
`;

export const ItemContent = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 16px;
  gap: 16px;
`;

export const IconContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: var(--translucent-lilac);
  width: 55px;
  height: 55px;
`;
