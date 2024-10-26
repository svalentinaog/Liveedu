import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import usePaymentViewModel from "../viewmodels/usePayment";
import PaymentCard from "../components/PaymentCard";
import PageHeader from "../components/PageHeader";

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
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <PageHeader title="Payment" />

        {/* Tarjetas de pago */}
        {payment.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </Box>

      {/* Añadir tarjeta de pago */}
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
