import { Box } from "@mui/system";
import { ContainerPaymentCard, SubContainerPaymentCard } from "../styles/mui";
import { Typography } from "@mui/material";

interface ITransitionCardProps {
  transition: {
    coins: string;
    value: string;
    date: string;
  };
}

export default function TransitionCard({ transition }: ITransitionCardProps) {
  return (
    <ContainerPaymentCard>
      <SubContainerPaymentCard>
        <img
          style={{ height: "30px" }}
          src={transition.coins}
          alt="Payment Card"
        />
        <Typography sx={{ color: "var(--dark-gray)" }}>
          {transition.value}
        </Typography>
      </SubContainerPaymentCard>
      <Box>
        <Typography sx={{ color: "var(--light-gray)" }}>
          {transition.date}
        </Typography>
      </Box>
    </ContainerPaymentCard>
  );
}
