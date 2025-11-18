import Card from "./Card";
import { useState } from "react";

export default function DashboardAdmin({ onNavigate }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="col-span-2">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
          Panel Administrador
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <Card
            title="Usuarios"
            subtitle="Crear y gestionar"
            onClick={() => onNavigate("usuarios")}
          />
          <Card
            title="Productos"
            subtitle="Stock y recetas"
            onClick={() => onNavigate("productos")}
          />
          <Card
            title="Mesas"
            subtitle="Adminsitracion de Mesas"
            onClick={() => onNavigate("mesas")}
          />
        </div>
      </div>

      <aside className="bg-white p-4 rounded-xl shadow">
        <h4 className="font-semibold">Indicadores rápidos</h4>
        <ul className="mt-3 text-sm space-y-2 text-gray-600">
          <li>Ventas hoy: <span className="font-semibold text-green-600">12</span></li>
          <li>Platos pendientes: <span className="font-semibold text-yellow-600">8</span></li>
          <li>Stock crítico: <span className="font-semibold text-red-600">4</span></li>
        </ul>
      </aside>
    </div>
  );
}