import { useState } from "react";

export default function Login({ onLogin, onForgot }) {
  const [rolSel, setRolSel] = useState("cliente");
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para manejar errores

  const handleLogin = () => {
    setError(""); // Limpiar errores previos
    if (rolSel === "cliente") {
      if (!nombre.trim()) {
        setError("Por favor ingrese su nombre.");
        return;
      }
      onLogin(rolSel, { nombre: nombre || rolSel });
    } else {
      if (!usuario || !password) {
        setError("Por favor ingrese usuario y contraseña.");
        return;
      }
      onLogin(rolSel, { usuario, password });
    }
  };

  const handleClear = () => {
    setNombre("");
    setUsuario("");
    setPassword("");
    setError("");
  };

  const getRoleColors = () => {
    switch (rolSel) {
      case "cliente":
        return "from-blue-400 to-cyan-500";
      case "admin":
        return "from-purple-400 to-pink-500";
      case "cocina":
        return "from-orange-400 to-red-500";
      case "bodega":
        return "from-green-400 to-teal-500";
      case "finanzas":
        return "from-yellow-400 to-orange-500";
      default:
        return "from-indigo-400 to-purple-500";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:scale-105">

        <h2 className={`text-3xl font-bold mb-6 text-center bg-gradient-to-r ${getRoleColors()} bg-clip-text text-transparent animate-pulse`}>
          Ingreso al Sistema
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-bounce">
            {error}
          </div>
        )}

        <label className="block text-sm font-semibold mb-2 text-gray-700">Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
          placeholder="Ej: María"
        />

        <label className="block text-sm font-semibold mb-2 text-gray-700">Ingresar como</label>
        <select
          value={rolSel}
          onChange={(e) => setRolSel(e.target.value)}
          className={`w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 bg-gradient-to-r ${getRoleColors()} text-white font-medium`}
        >
          <option value="cliente" className="bg-white text-black"> Cliente (mesa)</option>
          <option value="admin" className="bg-white text-black"> Administrador</option>
          <option value="cocina" className="bg-white text-black"> Cocina</option>
          <option value="bodega" className="bg-white text-black"> Bodega</option>
          <option value="finanzas" className="bg-white text-black"> Finanzas</option>
        </select>

        {rolSel !== "cliente" && (
          <>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Usuario</label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
              placeholder="Ej: admin123"
            />

            <label className="block text-sm font-semibold mb-2 text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
              placeholder="********"
            />

            {/* 👉 Nuevo botón de recuperación */}
            <p
              className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer mb-4 underline text-right"
              onClick={() => onForgot()}
            >
              ¿Olvidó su contraseña?
            </p>
          </>
        )}

        <div className="flex gap-4">
          <button
            className={`flex-1 bg-gradient-to-r ${getRoleColors()} hover:from-opacity-80 hover:to-opacity-90 text-white py-3 rounded-lg font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95`}
            onClick={handleLogin}
          >
            Entrar
          </button>

          <button
            className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white py-3 rounded-lg font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={handleClear}
          >
            Borrar
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6 animate-fade-in">
          Selecciona tu rol y accede al sistema de manera segura.
        </p>
      </div>
    </div>
  );
}
