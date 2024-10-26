import styled from "@emotion/styled";
import { Grid } from "@mui/system";

export const FormContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 0;

  @media (max-width: 600px) {
    justify-content: space-between;
    min-height: 90vh;
    gap: 0;
  }

  @media (min-width: 600px) {
    justify-content: center;
    min-height: 100vh;
    gap: 48px;
  }
`;

export const FormContainerTwo = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media (max-width: 600px) {
    justify-content: space-between;
    gap: 0;
  }

  @media (min-width: 600px) {
    justify-content: center;
    min-height: 100vh;
    gap: 48px;
  }
`;
