import styled from "@emotion/styled";
import { Grid } from "@mui/system";

export const OnboardingContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  gap: 32px;

  @media (min-width: 600px) {
    justify-content: center;
    min-height: 100vh;
    gap: 48px;
  }

  @media (min-width: 960px) {
    justify-content: center;
    min-height: 100vh;
    gap: 48px;
  }
`;
