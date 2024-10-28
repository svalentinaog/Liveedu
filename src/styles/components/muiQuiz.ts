import styled from "@emotion/styled";
import { Box, Card, IconButton, Typography } from "@mui/material";

export const QuizContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuizDetailContainer = styled(Box)`
  width: 100%;
  height: 90vh; /* Equivalente a xs */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 120px; /* Equivalente a gap: 15 */
  padding: 20px;

  @media (min-width: 900px) {
    height: 100%; /* Equivalente a md */
  }
`;

export const QuizContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 48px; /* Equivalente a gap: 6 */
`;

export const QuestionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Equivalente a gap: 2 */
`;

export const QuizDetailCard = styled(Card)`
  position: relative;
  width: 100%;
  border-radius: 20px;
  background: var(--white-app);
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Equivalente a gap: 2 */
`;

export const ImageContainer = styled(Box)`
  width: 100%;
  height: 250px; /* Equivalente a xs */
  background: var(--lilac);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    height: 500px; /* Equivalente a md */
  }
`;

export const CenteredIconButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--dark-gray);
  background: var(--gradient);

  &:hover {
    background-color: var(--primary-dark);
  }
`;

export const QuestionText = styled(Typography)`
  font-weight: 400;
  font-size: 18px; /* Equivalente a xs */

  @media (min-width: 900px) {
    font-size: 24px; /* Equivalente a md */
  }
`;
