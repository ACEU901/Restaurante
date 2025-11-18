import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Login from "./components/Login";
import ClienteMenu from "./components/ClienteMenu";
import DashboardAdmin from "./components/DashboardAdmin";
import UsuariosAdmin from "./components/UsuariosAdmin";
import CocinaBoard from "./components/CocinaBoard";
import BodegaView from "./components/BodegaView";
import FinanzasView from "./components/FinanzasView";
import ProductsManager from "./components/ProductsManager";
import Soporte from "./components/Soporte";
import MesasView from "./components/MesasView";
import RecuperarPassword from "./components/RecuperarPassword";

export default function App() {
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [view, setView] = useState("home");

  // 👉 Mostrar Recuperar Password
  if (view === "recuperar") {
    return <RecuperarPassword onBack={() => setView("home")} />;
  }

  // 👉 Mostrar Login si no hay rol
  if (!role)
    return (
      <Login
        onLogin={(r, u) => {
          setRole(r);
          setUser(u);
          setView("dashboard");
        }}
        onForgot={() => setView("recuperar")}
      />
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Topbar
        role={role}
        user={user}
        onLogout={() => {
          setRole(null);
          setUser(null);
          setView("home");
        }}
        onNavigate={setView}
      />
      <main className="p-6 max-w-6xl mx-auto">

        {/* CLIENTE */}
        {role === "cliente" && view === "dashboard" && <ClienteMenu />}

        {/* ADMIN */}
        {role === "admin" && view === "dashboard" && (
          <DashboardAdmin onNavigate={setView} />
        )}
        {role === "admin" && view === "usuarios" && <UsuariosAdmin />}
        {role === "admin" && view === "productos" && (
          <ProductsManager onBack={() => setView("dashboard")} />
        )}
        {role === "admin" && view === "mesas" && <MesasView />}

        {view === "soporte" && (
          <Soporte onBack={() => setView("dashboard")} />
        )}

        {/* BODEGA */}
        {role === "bodega" && view === "dashboard" && <BodegaView />}

        {/* COCINA */}
        {role === "cocina" && view === "dashboard" && <CocinaBoard />}

        {/* FINANZAS */}
        {role === "finanzas" && view === "dashboard" && <FinanzasView />}

      </main>
    </div>
  );
}
