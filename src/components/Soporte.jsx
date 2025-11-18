import { HelpCircle, MessageSquare, AlertTriangle, Phone } from "lucide-react";

export default function Soporte({ onBack }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      {/* Título + botón volver */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-600">
          Centro de Soporte
        </h2>

        {onBack && (
          <button
            onClick={onBack}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm"
          >
            Volver
          </button>
        )}
      </div>

      <p className="text-gray-600 mb-6 text-lg">
        Bienvenido al centro de soporte del Restaurante Siglo XXI.  
        Selecciona una de las opciones para obtener ayuda.
      </p>

      {/* GRID DE OPCIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="text-indigo-600" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Preguntas Frecuentes
            </h3>
          </div>
          <p className="text-gray-600">
            Revisa respuestas a dudas comunes relacionadas con pedidos,
            funcionamiento del sistema y accesos.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="text-indigo-600" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Soporte Técnico
            </h3>
          </div>
          <p className="text-gray-600">
            Obtén asistencia técnica del sistema, errores de acceso o fallos en la plataforma.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="text-yellow-600" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Reportar un Problema
            </h3>
          </div>
          <p className="text-gray-600">
            Informa fallas o reporta incidentes para que el equipo técnico pueda solucionarlos.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-gray-50 rounded-xl border hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <Phone className="text-green-600" size={28} />
            <h3 className="text-xl font-semibold text-gray-800">
              Contacto del Administrador
            </h3>
          </div>
          <p className="text-gray-600">
            Comunícate con el administrador del sistema para soporte directo o consultas internas.
          </p>
        </div>
      </div>
    </div>
  );
}
