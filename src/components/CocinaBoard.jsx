import { useState } from "react";

export default function CocinaBoard() {
  const [ordenes, setOrdenes] = useState([
    { id: 101, mesa: "M3", items: ["Cazuela"], tiempoTotal: 14, llegada: "12:02" },
    { id: 102, mesa: "M1", items: ["Lomo", "Papas"], tiempoTotal: 30, llegada: "12:05" },
    { id: 103, mesa: "M2", items: ["Ensalada"], tiempoTotal: 6, llegada: "12:06" },
  ]);

  const ordenadas = [...ordenes].sort(
    (a, b) => a.tiempoTotal - b.tiempoTotal || a.llegada.localeCompare(b.llegada)
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-4 text-indigo-600">
        Tablero de Cocina
      </h3>
      <ol className="list-decimal pl-5 space-y-3">
        {ordenadas.map((o) => (
          <li
            key={o.id}
            className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <div className="font-semibold">
                Mesa {o.mesa} — {o.items.join(", ")}
              </div>
              <div className="text-sm text-gray-500">
                Tiempo: {o.tiempoTotal} min — Llegada: {o.llegada}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600">
                Marcar listo
              </button>
              <button className="px-3 py-1 bg-gray-200 text-sm rounded-md hover:bg-gray-300">
                Asignar
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}