import { useState } from "react";
import { PaymentContent } from "../models/PaymentContent";

export default function usePaymentViewModel() {
  const [payment] = useState(PaymentContent);

  return {
    payment,
  };
}
