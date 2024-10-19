import styled from "@emotion/styled";
import { Grid } from "@mui/system";

export const PaginationContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;

  gap: 32px;
  padding: 0 16px 16px 16px;

  @media (min-width: 600px) {
    height: auto; 
    align-items: center;

  @media (max-width: 600px) {
    align-items: start;
  }
`;
