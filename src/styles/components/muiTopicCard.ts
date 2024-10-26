import styled from "@emotion/styled";
import { Card, Box, Typography } from "@mui/material";

export const ContainerTopicCard = styled(Card)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7px 20px;
  padding: 10px 40px;
  box-shadow: none;
  border-radius: 16px;
  background: var(--translucent-lilac);
  align-items: center;
  gap: 16px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  @media (min-width: 600px) {
    padding: 10px 40px;
  }
`;

export const SubContainerTopicCard = styled(Box)`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;

  @media (min-width: 600px) {
    gap: 16px;
  }
`;

export const TitleTopicCard = styled(Typography)`
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 20px;
  }
`;

export const DescriptionTopicCard = styled(Typography)`
  font-size: 10px;

  @media (min-width: 600px) {
    font-size: 14px;
  }
`;

export const DurationTopicCard = styled(Typography)`
  color: var(--blue);
  font-size: 14px;
`;
