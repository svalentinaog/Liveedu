import {
  Person,
  Receipt,
  Payment,
  Policy,
  SupportAgent,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

export interface IProfileContent {
  text: string;
  icon: SvgIconComponent;
  path: string;
}

export const ProfileContent: IProfileContent[] = [
  { text: "Personal Information", icon: Person, path: "/personal-information" },
  { text: "Transaction History", icon: Receipt, path: "/transaction-history" },
  { text: "Payment", icon: Payment, path: "/payment" },
  { text: "Terms of Use", icon: Policy, path: "/terms-of-use" },
  { text: "Support", icon: SupportAgent, path: "/support" },
];
