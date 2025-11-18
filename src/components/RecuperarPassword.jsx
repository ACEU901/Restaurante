import { useState } from "react";

export default function RecuperarPassword({ onBack }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSend = () => {
    if (!email.trim()) {
      setMsg("Ingrese su correo para continuar.");
      return;
    }

    // Aquí iría llamada al backend
    setMsg("Si el correo existe en el sistema, recibirá instrucciones.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
          Recuperar Contraseña
        </h2>

        {msg && (
          <p className="p-3 mb-4 bg-blue-100 border border-blue-300 text-blue-700 rounded-lg">
            {msg}
          </p>
        )}

        <label className="block text-sm font-semibold mb-2 text-gray-700">Correo registrado</label>
        <input
          type="email"
          placeholder="usuario@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 mb-5 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all"
        />

        <button
          onClick={handleSend}
          className="w-full bg-indigo-500 text-white py-3 rounded-lg mb-4 hover:bg-indigo-600 shadow-lg transition-all"
        >
          Enviar instrucciones
        </button>

        <button
          onClick={onBack}
          className="w-full bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 shadow-md transition-all"
        >
          Volver
        </button>

      </div>
    </div>
  );
}
