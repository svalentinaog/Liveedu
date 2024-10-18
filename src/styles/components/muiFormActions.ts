import styled from "styled-components";
import { Box } from "@mui/system";

export const FormActions = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 400px;
  gap: 16px; 

  @media (max-width: 600px) {
    justify-content: flex-end
`;
