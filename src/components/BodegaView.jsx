export default function BodegaView() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        Panel Bodega
      </h2>
      <p className="text-gray-600 mb-4">
        Gestiona el inventario y revisa recetas de productos.
      </p>
      {/* Aquí no ponemos botón de Productos, solo el panel de Bodega */}
    </div>
  );
}