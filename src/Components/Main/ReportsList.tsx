import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ReportsList = () => {
    return (
    <section id="reportes" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Reportes Recientes</h3>
                    <p className="text-slate-600">Los últimos incidentes reportados por la comunidad</p>
                </div>
                <Link to="/crear-reporte">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                        <Plus className="h-4 w-4" />
                        Nuevo Reporte
                    </button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Reportes */}
            </div>
        </div>
    </section>
)
}

export default ReportsList
