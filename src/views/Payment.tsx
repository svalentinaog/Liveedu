import { Box } from "@mui/system";
import usePaymentViewModel from "../viewmodels/usePayment";
import PaymentCard from "../components/PaymentCard";
import HistoryBack from "../components/HistoryBack";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Payment() {
  const { payment } = usePaymentViewModel();

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", md: "100%" },
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <HistoryBack />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Typography
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Payment
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {payment.map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </Box>
        </Box>
      </Box>
      <Link to="/new-card" style={{ textAlign: "center" }}>
        <Button
          sx={{
            textTransform: "capitalize",
            color: "var(--dark-gray)",
          }}
        >
          Add new card
        </Button>
      </Link>
    </Box>
  );
}
