import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const FormContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  gap: 16px;

  height: 100%;

  @media (min-width: 600px) {
    height: auto;
  }

  @media (min-width: 960px) {
    height: auto;
  }
`;
