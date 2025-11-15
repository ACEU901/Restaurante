import { useState } from "react";

export default function Topbar({ role, user, onLogout, onNavigate }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div className="font-bold text-xl text-indigo-600">
            Restaurante Siglo XXI
          </div>
          <nav className="hidden md:flex gap-3 text-sm">
            {role === "cliente" && (
              <button
                onClick={() => onNavigate("menu")}
                className="px-3 py-1 rounded-md bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
              >
                Menú
              </button>
            )}
            {role === "admin" && (
              <button
                onClick={() => onNavigate("dashboard")}
                className="px-3 py-1 rounded-md bg-indigo-100 hover:bg-indigo-200 text-indigo-700"
              >
                Dashboard
              </button>
            )}
            <button
              onClick={() => onNavigate("soporte")}
              className="px-3 py-1 rounded-md hover:bg-gray-100 text-gray-600"
            >
              Soporte
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-700">{user?.nombre || "Usuario"}</div>
          <button
            className="px-3 py-1 rounded-md text-sm bg-red-500 hover:bg-red-600 text-white"
            onClick={onLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}