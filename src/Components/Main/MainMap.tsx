import MapReport from "../Maps/MapReport"

const MainMap = () => {
    return (
        <section id="mapa" className="py-16 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Mapa de Incidentes</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                        Explora los reportes de seguridad en tu área. Haz clic en los marcadores para ver más detalles.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <MapReport/>
                    </div>
                </div>
            </section>
    )
}

export default MainMap
