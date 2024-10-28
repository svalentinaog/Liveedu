import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const QuizzesByTopicContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  margin-bottom: 100px;

  @media (min-width: 600px) {
    padding: 0 20px;
  }

  @media (min-width: 900px) {
    gap: 48px;
    padding: 0 20px;
    margin-bottom: 25px;
  }
`;

export const TopicsContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: stretch;
  gap: 48px;
  padding: 16px;

  @media (min-width: 900px) {
    padding: 0;
  }
`;

export const TopicsListContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleQuizByTopic = styled(Typography)`
  margin-bottom: 32px;
  font-weight: bold;
  font-size: 16px;

  @media (min-width: 900px) {
    font-size: 24px;
  }
`;

// Cuestionarios completados CONGRATULATIONS

export const QuizCompletedContainer = styled(Box)`
  width: 100%;
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (min-width: 900px) {
    height: 100%;
  }
`;

export const QuizCompletedContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: center;
`;

export const QuizCompletedCoins = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const CongratulationsText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 900px) {
    font-size: 40px;
  }
`;

export const CompletionText = styled(Typography)`
  font-size: 16px;

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

export const CorrectAnswersText = styled(Typography)`
  font-size: 16px;

  @media (min-width: 900px) {
    font-size: 18px;
  }
`;
