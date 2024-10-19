import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div style={{ flex: 1, padding: "20px" }}>
        {/* Aquí es donde se renderizarán las rutas hijas */}
        <Outlet />
      </div>
    </div>
  );
}
