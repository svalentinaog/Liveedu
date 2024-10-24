import {
  MonetizationOn,
  LocalOffer,
  AttachMoney,
  Share,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

export interface ICurrentBalanceContent {
  text: string;
  icon: SvgIconComponent;
  path: string;
}

export const CurrentBalanceContent: ICurrentBalanceContent[] = [
  { text: "Buy", icon: MonetizationOn, path: "/buy" },
  { text: "Promo Code", icon: LocalOffer, path: "/promo-code" },
  { text: "Additional Income", icon: AttachMoney, path: "/additional-income" },
  { text: "Social Media", icon: Share, path: "/social-media" },
];
