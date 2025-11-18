import { useState } from "react";

export default function BodegaView() {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarForm, setMostrarForm] = useState(false);

  const [inventario, setInventario] = useState([
    { id: 1, nombre: "Carne", stock: 25, receta: "Base para lomo y cazuela" },
    { id: 2, nombre: "Papas", stock: 40, receta: "Fritas o cocidas" },
    { id: 3, nombre: "Cebolla", stock: 18, receta: "Salteados y sofritos" },
  ]);

  const [nuevo, setNuevo] = useState({
    nombre: "",
    stock: "",
    receta: "",
  });

  const agregarProducto = () => {
    if (!nuevo.nombre || !nuevo.stock) return;

    setInventario([
      ...inventario,
      { id: inventario.length + 1, ...nuevo, stock: Number(nuevo.stock) },
    ]);

    setNuevo({ nombre: "", stock: "", receta: "" });
    setMostrarForm(false);
  };

  const filtrados = inventario.filter((i) =>
    i.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Panel de Bodega
      </h2>
      <p className="text-gray-600 mb-6">
        Controla el inventario, revisa recetas y añade insumos nuevos.
      </p>

      {/* Filtros */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border px-3 py-2 rounded-lg w-1/3 shadow-sm"
        />

        <button
          onClick={() => setMostrarForm(!mostrarForm)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          {mostrarForm ? "Cancelar" : "Agregar Producto"}
        </button>
      </div>

      {/* Formulario */}
      {mostrarForm && (
        <div className="p-4 border rounded-xl bg-gray-50 shadow-sm mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Nuevo Producto
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <input
              type="text"
              placeholder="Nombre"
              value={nuevo.nombre}
              onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
              className="border px-3 py-2 rounded-lg"
            />

            <input
              type="number"
              placeholder="Stock"
              value={nuevo.stock}
              onChange={(e) => setNuevo({ ...nuevo, stock: e.target.value })}
              className="border px-3 py-2 rounded-lg"
            />

            <input
              type="text"
              placeholder="Receta / Uso"
              value={nuevo.receta}
              onChange={(e) => setNuevo({ ...nuevo, receta: e.target.value })}
              className="border px-3 py-2 rounded-lg"
            />
          </div>

          <button
            onClick={agregarProducto}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Guardar
          </button>
        </div>
      )}

      {/* Tabla de Inventario */}
      <table className="w-full text-left border-collapse shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Producto</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Receta</th>
          </tr>
        </thead>

        <tbody>
          {filtrados.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50 transition">
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.nombre}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border text-gray-600">{p.receta}</td>
            </tr>
          ))}

          {filtrados.length === 0 && (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-500">
                No hay productos que coincidan con la búsqueda.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
