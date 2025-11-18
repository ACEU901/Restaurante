import { useState } from "react";

export default function MesasView() {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarForm, setMostrarForm] = useState(false);

  const [mesas, setMesas] = useState([
    { id: 1, nombre: "M1", capacidad: 2, estado: "Disponible" },
    { id: 2, nombre: "M2", capacidad: 4, estado: "Ocupada" },
    { id: 3, nombre: "M3", capacidad: 6, estado: "Reservada" },
  ]);

  const [nuevaMesa, setNuevaMesa] = useState({
    nombre: "",
    capacidad: "",
    estado: "Disponible",
  });

  const agregarMesa = () => {
    if (!nuevaMesa.nombre || !nuevaMesa.capacidad) return;

    setMesas([
      ...mesas,
      {
        id: mesas.length + 1,
        nombre: nuevaMesa.nombre,
        capacidad: Number(nuevaMesa.capacidad),
        estado: nuevaMesa.estado,
      },
    ]);

    setNuevaMesa({ nombre: "", capacidad: "", estado: "Disponible" });
    setMostrarForm(false);
  };

  const eliminarMesa = (id) => {
    setMesas(mesas.filter((m) => m.id !== id));
  };

  const filtradas = mesas.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Administración de Mesas
      </h2>
      <p className="text-gray-600 mb-6">
        Gestiona las mesas del restaurante, su capacidad y disponibilidad.
      </p>

      {/* Filtros y botón */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Buscar mesa..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border px-3 py-2 rounded-lg w-1/3 shadow-sm"
        />

        <button
          onClick={() => setMostrarForm(!mostrarForm)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          {mostrarForm ? "Cancelar" : "Agregar Mesa"}
        </button>
      </div>

      {/* Formulario */}
      {mostrarForm && (
        <div className="p-4 border rounded-xl bg-gray-50 shadow-sm mb-6">
          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Nueva Mesa
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <input
              type="text"
              placeholder="Nombre"
              value={nuevaMesa.nombre}
              onChange={(e) =>
                setNuevaMesa({ ...nuevaMesa, nombre: e.target.value })
              }
              className="border px-3 py-2 rounded-lg"
            />

            <input
              type="number"
              placeholder="Capacidad"
              value={nuevaMesa.capacidad}
              onChange={(e) =>
                setNuevaMesa({ ...nuevaMesa, capacidad: e.target.value })
              }
              className="border px-3 py-2 rounded-lg"
            />

            <select
              value={nuevaMesa.estado}
              onChange={(e) =>
                setNuevaMesa({ ...nuevaMesa, estado: e.target.value })
              }
              className="border px-3 py-2 rounded-lg"
            >
              <option>Disponible</option>
              <option>Ocupada</option>
              <option>Reservada</option>
            </select>
          </div>

          <button
            onClick={agregarMesa}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Guardar
          </button>
        </div>
      )}

      {/* Tabla */}
      <table className="w-full text-left border-collapse shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Capacidad</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {filtradas.map((m) => (
            <tr key={m.id} className="hover:bg-gray-50 transition">
              <td className="p-2 border">{m.id}</td>
              <td className="p-2 border">{m.nombre}</td>
              <td className="p-2 border">{m.capacidad}</td>
              <td className="p-2 border">{m.estado}</td>
              <td className="p-2 border">
                <button
                  onClick={() => eliminarMesa(m.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {filtradas.length === 0 && (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                No se encontraron mesas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
