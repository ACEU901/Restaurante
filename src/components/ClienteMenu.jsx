import { useState } from "react";

export default function ClienteMenu() {
  const platos = [
    { id: 1, nombre: "Cazuela tradicional", precio: 6200, tiempo: 14 },
    { id: 2, nombre: "Lomo a lo pobre", precio: 8900, tiempo: 20 },
    { id: 3, nombre: "Ensalada fresca", precio: 4800, tiempo: 6 },
    { id: 4, nombre: "Sopa de verduras", precio: 3500, tiempo: 5 },
    { id: 5, nombre: "Pizza margarita", precio: 7800, tiempo: 12 },
    { id: 6, nombre: "Hamburguesa clásica", precio: 6500, tiempo: 10 },
    { id: 7, nombre: "Lasaña de carne", precio: 9000, tiempo: 15 },
    { id: 8, nombre: "Ceviche de pescado", precio: 8500, tiempo: 8 },
    { id: 9, nombre: "Pollo al horno con papas", precio: 9500, tiempo: 18 },
    { id: 10, nombre: "Tacos de carne", precio: 5500, tiempo: 7 },
    { id: 11, nombre: "Postre de chocolate", precio: 4200, tiempo: 4 },
    { id: 12, nombre: "Helado artesanal", precio: 3800, tiempo: 3 },
    { id: 13, nombre: "Ensalada César", precio: 5000, tiempo: 6 },
    { id: 14, nombre: "Sándwich de pollo", precio: 4700, tiempo: 5 },
    { id: 15, nombre: "Pasta Alfredo", precio: 8200, tiempo: 12 },
    { id: 16, nombre: "Salchipapa", precio: 2000, tiempo: 12 },
  ];
  const [carrito, setCarrito] = useState([]);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="col-span-2">
        <h3 className="text-xl font-semibold mb-3">Menú</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {platos.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="font-semibold">{p.nombre}</div>
              <div className="text-sm text-gray-500">
                Tiempo aprox: {p.tiempo} min
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="font-bold">{p.precio} CLP</div>
                <button
                  className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm"
                  onClick={() => setCarrito([...carrito, p])}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="bg-white p-4 rounded-xl shadow">
        <h4 className="font-semibold mb-2">Pedido</h4>
        {carrito.length === 0 ? (
          <div className="text-sm text-gray-500">Sin items</div>
        ) : (
          <ul className="mt-2 space-y-2">
            {carrito.map((c, i) => (
              <li key={i} className="flex justify-between text-sm">
                {c.nombre} <span>{c.precio} CLP</span>
              </li>
            ))}
          </ul>
        )}
        <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md">
          Enviar pedido a cocina
        </button>
      </aside>
    </div>
  );
}