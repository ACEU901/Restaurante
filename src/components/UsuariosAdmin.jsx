import { useState } from "react";

export default function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "José", rol: "admin", email: "jose@restaurante.cl" },
    { id: 2, nombre: "Sofía", rol: "cocina", email: "sofia@restaurante.cl" },
  ]);

  const [modo, setModo] = useState("lista"); // "lista" | "crear"
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    rol: "admin",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const crearUsuario = (e) => {
    e.preventDefault();

    const nuevo = {
      id: usuarios.length + 1,
      ...form,
    };

    setUsuarios([...usuarios, nuevo]);
    setForm({ nombre: "", email: "", rol: "admin" });
    setModo("lista");
  };

  // --------------------------------------------------------------
  // RENDER PANTALLA LISTA DE USUARIOS
  // --------------------------------------------------------------
  if (modo === "lista") {
    return (
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-4 text-indigo-600">
          Gestión de Usuarios
        </h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-2">Nombre</th>
              <th className="text-left py-2">Rol</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="border-t hover:bg-gray-50">
                <td className="py-2">{u.nombre}</td>
                <td className="py-2 capitalize">{u.rol}</td>
                <td className="py-2">{u.email}</td>
                <td className="py-2">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">
                    Editar
                  </button>
                  <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <button
            onClick={() => setModo("crear")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Crear Usuario
          </button>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------
  // RENDER PANTALLA CREAR USUARIO
  // --------------------------------------------------------------
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg mb-4 text-indigo-600">
        Crear Nuevo Usuario
      </h3>

      <form onSubmit={crearUsuario} className="space-y-4">

        <div>
          <label className="block text-sm mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Rol</label>
          <select
            name="rol"
            value={form.rol}
            onChange={handleChange}
            className="border rounded w-full p-2"
          >
            <option value="admin">Administrador</option>
            <option value="cocina">Cocina</option>
            <option value="bodega">Bodega</option>
            <option value="finanzas">Finanzas</option>
            <option value="cliente">Cliente</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Guardar Usuario
          </button>

          <button
            type="button"
            onClick={() => setModo("lista")}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
        </div>

      </form>
    </div>
  );
}
