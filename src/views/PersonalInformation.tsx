import { Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import UserPersonalInfoCard from "../components/PersonalInfoCard";
import {
  IconContainer,
  ItemContainer,
  ItemContent,
  PersonalInfoContainer,
} from "../styles/mui";
import usePersonalInfoViewModel from "../viewmodels/usePersonalInfo";
import { Logout } from "@mui/icons-material";
import { Box } from "@mui/system";

export default function PersonalInformation() {
  const { personalInfo } = usePersonalInfoViewModel();

  // Manejar la lógica de cierre de sesión
  const handleLogout = () => {
    // Lógica de cierre de sesión
    console.log("Sesión cerrada");
  };

  return (
    <PersonalInfoContainer>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <PageHeader title="Account settings" />

        {/* Datos del Usuario Logueado */}
        <ItemContainer>
          {personalInfo.map((user) =>
            // Recorremos cada campo de usuario y lo enviamos al componente
            Object.entries(user).map(([key, value]) => {
              if (key !== "id") {
                return (
                  <UserPersonalInfoCard
                    key={`${user.id}-${key}`}
                    user={value}
                  />
                );
              }
            })
          )}
        </ItemContainer>
      </Box>

      {/* Boton LogOut */}
      <Box
        onClick={handleLogout}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          cursor: "pointer",
        }}
      >
        <ItemContent>
          <IconContainer>
            <Logout />
          </IconContainer>
          <Typography>Log out</Typography>
        </ItemContent>
      </Box>
    </PersonalInfoContainer>
  );
}
