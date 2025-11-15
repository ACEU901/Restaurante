import { useState } from "react";

export default function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "José", rol: "admin", email: "jose@restaurante.cl" },
    { id: 2, nombre: "Sofía", rol: "cocina", email: "sofia@restaurante.cl" },
  ]);

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
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
          Crear Usuario
        </button>
      </div>
    </div>
  );
}