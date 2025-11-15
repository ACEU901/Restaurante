import { useState } from "react";

export default function ProductsManager({ onBack }) {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Lomo saltado", stock: 12, receta: "Carne, cebolla, papas fritas" },
    { id: 2, nombre: "Cazuela", stock: 8, receta: "Pollo, zapallo, arroz, papa" },
    { id: 3, nombre: "Empanadas", stock: 20, receta: "Pino, harina, huevo, aceituna" },
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-indigo-600">
          Gestión de Productos
        </h2>
        {onBack && (
          <button
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            Volver
          </button>
        )}
      </div>

      <h1 className="text-3xl font-bold text-red-600 mb-4">PRODUCTOS MANAGER ACTIVO</h1>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Producto</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Receta</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.nombre}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border">{p.receta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}