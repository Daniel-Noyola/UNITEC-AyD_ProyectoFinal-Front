const PointInfo = () => {
    return (
        <aside className="w-full lg:w-[400px] bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <span className="inline-block w-6 h-6">
                    <img src="https://img.icons8.com/fluency/48/marker.png" alt="marker" className="w-full h-full"/>
                </span>
                Información del Punto
            </h3>
            <div className="text-gray-700 text-lg">
                
                <p className="mb-2">Selecciona un marcador en el mapa para ver detalles del incidente.</p>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-900">
                    <p className="font-semibold">Ejemplo:</p>
                    <ul className="list-disc ml-5">
                        <li>Tipo: Robo a mano armada</li>
                        <li>Fecha: 12/06/2024</li>
                        <li>Ubicación: Av. Reforma, CDMX</li>
                        <li>Descripción: Asalto a transeúnte reportado por usuario anónimo.</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default PointInfo
