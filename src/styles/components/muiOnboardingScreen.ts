import styled from "@emotion/styled";
import { Grid } from "@mui/system";

export const OnboardingScreen = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;
