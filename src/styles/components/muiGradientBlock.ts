import styled from "@emotion/styled";
import { Grid } from "@mui/system";

export const GradientBlock = styled(Grid)`
  height: 100vh;
  background: var(--gradient);
  border-radius: 0 150px 150px 0;

  @media (max-width: 600px) {
    display: none;
    height: 90vh;
  }

  @media (min-width: 600px) {
    display: block;
  }
`;
