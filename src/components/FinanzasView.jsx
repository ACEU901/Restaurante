import { useState } from "react";

export default function FinanzasView() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-3 text-indigo-600">Finanzas</h3>
      <p className="text-sm text-gray-600">
        Resumen de caja, ingresos y egresos. Cálculo de utilidad diaria y mensual.
      </p>
      <div className="mt-4 text-sm">
        <ul className="space-y-1 text-gray-700">
          <li>💰 Ingresos del día: <span className="font-semibold text-green-600">$180.000</span></li>
          <li>📦 Egresos: <span className="font-semibold text-red-500">$45.000</span></li>
          <li>📈 Utilidad neta: <span className="font-semibold text-blue-600">$135.000</span></li>
        </ul>
      </div>
    </div>
  );
}