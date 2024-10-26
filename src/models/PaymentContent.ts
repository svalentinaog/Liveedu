interface IPaymentContent {
  id: number;
  logo: string;
  cardName: string;
  cardNumber: string;
  expires: string;
  cvv?: string;
}

export const PaymentContent: IPaymentContent[] = [
  {
    id: 1,
    logo: "https://w7.pngwing.com/pngs/136/293/png-transparent-paypal-logo.png",
    cardName: "PayPal",
    cardNumber: "N/A",
    expires: "N/A",
  },
  {
    id: 2,
    logo: "https://cdn.prod.website-files.com/64199d190fc7afa82666d89c/648b606d4a139591f6b3440c_mastercard-1.png",
    cardName: "Nequi",
    cardNumber: "1234567890",
    expires: "N/A",
  },
];
