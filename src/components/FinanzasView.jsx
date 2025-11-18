import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function FinanzasView() {
  // Datos inventados para el gráfico
  const ventasData = [
    { dia: "Lun", ventas: 120000 },
    { dia: "Mar", ventas: 150000 },
    { dia: "Mié", ventas: 98000 },
    { dia: "Jue", ventas: 175000 },
    { dia: "Vie", ventas: 210000 },
    { dia: "Sáb", ventas: 250000 },
    { dia: "Dom", ventas: 190000 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-3 text-indigo-600">Finanzas</h3>

      <p className="text-sm text-gray-600">
        Resumen de caja, ingresos y egresos. Cálculo de utilidad diaria y mensual.
      </p>

      <div className="mt-4 text-sm">
        <ul className="space-y-1 text-gray-700">
          <li>
            💰 Ingresos del día:{" "}
            <span className="font-semibold text-green-600">$180.000</span>
          </li>
          <li>
            📦 Egresos:{" "}
            <span className="font-semibold text-red-500">$45.000</span>
          </li>
          <li>
            📈 Utilidad neta:{" "}
            <span className="font-semibold text-blue-600">$135.000</span>
          </li>
        </ul>
      </div>

      {/* Gráfico financiero */}
      <div className="mt-8 bg-gray-50 p-4 rounded-xl border shadow-sm">
        <h4 className="font-semibold text-indigo-600 mb-3">Ventas de la Semana</h4>

        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={ventasData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="ventas"
                stroke="#4F46E5"
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
