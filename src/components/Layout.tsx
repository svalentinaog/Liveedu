import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Contenido principal */}
      <Box
        sx={{
          marginLeft: { xs: 0, md: "15%" },
          flex: 1,
        }}
      >
        {/* Aquí es donde se renderizarán las rutas hijas */}
        <Outlet />
      </Box>
    </Box>
  );
}
