import { Typography } from "@mui/material";
import { Edit, SvgIconComponent } from "@mui/icons-material";
import {
  IconContainer,
  PersonalInfoCardContainer,
  ItemContent,
} from "../styles/mui";

interface UserPersonalInfoCardProps {
  user: {
    text: string;
    icon: SvgIconComponent;
  };
}

export default function UserPersonalInfoCard({
  user,
}: UserPersonalInfoCardProps) {
  return (
    <PersonalInfoCardContainer>
      <ItemContent>
        <IconContainer>
          <user.icon />
        </IconContainer>
        <Typography>{user.text}</Typography>
      </ItemContent>
      <Edit />
    </PersonalInfoCardContainer>
  );
}
