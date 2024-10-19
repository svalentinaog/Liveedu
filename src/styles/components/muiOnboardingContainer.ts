import styled from "styled-components";
import { Grid } from "@mui/system";

export const OnboardingContainer = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  height: 90vh;
  box-sizing: border-box;

  @media (min-width: 600px) {
    height: 100vh;
  }

  @media (min-width: 960px) {
    height: 100vh;
  }
`;
