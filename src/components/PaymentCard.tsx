import { useState } from "react";
import { Box } from "@mui/system";
import {
  ContainerPaymentCard,
  NamberPaymentCard,
  SubContainerPaymentCard,
} from "../styles/mui";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IPaymentCardProps {
  payment: {
    logo: string;
    cardNumber: string;
  };
}

export default function PaymentCard({ payment }: IPaymentCardProps) {
  const [showCardNumber, setShowCardNumber] = useState(false);

  const handleToggleCardNumber = () => {
    setShowCardNumber(!showCardNumber);
  };

  return (
    <ContainerPaymentCard>
      <SubContainerPaymentCard>
        <img style={{ height: "30px" }} src={payment.logo} alt="Payment Card" />
        <Box>
          <NamberPaymentCard>
            {showCardNumber ? payment.cardNumber : "**** **** **** ****"}
          </NamberPaymentCard>
        </Box>
      </SubContainerPaymentCard>
      <IconButton
        onClick={handleToggleCardNumber}
        aria-label="toggle card number visibility"
      >
        {showCardNumber ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </ContainerPaymentCard>
  );
}
