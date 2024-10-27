import { Person, Email, Phone, LocationOn, Lock } from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";

interface IPersonalInfoField {
  text: string;
  icon: SvgIconComponent;
}

interface IPersonalInfoContent {
  id: number;
  name: IPersonalInfoField;
  email: IPersonalInfoField;
  phone: IPersonalInfoField;
  password: IPersonalInfoField;
  location: IPersonalInfoField;
}

export const PersonalInfoContent: IPersonalInfoContent[] = [
  {
    id: 1,
    name: { text: "John Doe", icon: Person },
    email: { text: "johndoe@example.com", icon: Email },
    phone: { text: "+1-555-1234", icon: Phone },
    password: { text: "password123", icon: Lock },
    location: { text: "New York, USA", icon: LocationOn },
  },
];
