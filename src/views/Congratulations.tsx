import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import {
  CompletionText,
  CongratulationsText,
  ContainerStarsImage,
  CorrectAnswersText,
  QuizCompletedCoins,
  QuizCompletedContainer,
  QuizCompletedContent,
  StarsImage,
} from "../styles/mui";

export default function Congratulations() {
  return (
    <QuizCompletedContainer>
      <ContainerStarsImage>
        <StarsImage src="svg/Stars.svg" alt="Stars Image" />
      </ContainerStarsImage>
      <QuizCompletedContent>
        <Box>
          <CongratulationsText>Congratulations</CongratulationsText>
          <CompletionText>You have completed the test</CompletionText>
        </Box>
        <CorrectAnswersText>14 correct answers</CorrectAnswersText>
        <QuizCompletedCoins>
          <img src="svg/coins.svg" alt="" />
          <Typography>14</Typography>
        </QuizCompletedCoins>
      </QuizCompletedContent>
    </QuizCompletedContainer>
  );
}
