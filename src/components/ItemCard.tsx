import { Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { IconContainer, ItemCardContainer } from "../styles/mui";

interface ItemCardProps {
  item: {
    icon: SvgIconComponent;
    text: string;
    onClick: () => void;
  };
}

export default function ItemCard({ item }: ItemCardProps) {
  const Icon = item.icon;

  return (
    <ItemCardContainer onClick={item.onClick}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <Typography>{item.text}</Typography>
    </ItemCardContainer>
  );
}
