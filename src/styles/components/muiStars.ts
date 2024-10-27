import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ContainerStarsImage = styled(Box)`
  width: 200px;
  height: auto;

  @media (min-width: 960px) {
    width: 300px;
  }
`;

export const StarsImage = styled("img")`
  width: 100%;
  height: 100%;
`;
