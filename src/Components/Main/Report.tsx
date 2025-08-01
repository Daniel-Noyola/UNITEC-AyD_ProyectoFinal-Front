import { AlertTriangle } from "lucide-react"
import { Link } from "react-router-dom"

const Report = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-4">¿Viste algo sospechoso?</h3>
                <p className="text-xl mb-8 text-blue-100">
                    Tu reporte puede ayudar a prevenir futuros incidentes y mantener segura a tu comunidad
                </p>
                <Link to="/crear-reporte">
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
                    <AlertTriangle className="h-5 w-5" />
                    Crear Reporte Ahora
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Report