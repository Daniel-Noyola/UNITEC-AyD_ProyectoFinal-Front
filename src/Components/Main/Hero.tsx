import { AlertTriangle, Eye } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-bold text-slate-800 mb-6">
                        Construyamos una comunidad más segura
                        <span className="text-blue-600"> juntos</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        RiskMap es una plataforma colaborativa donde los ciudadanos pueden reportar incidentes de seguridad y
                        visualizar información en tiempo real para tomar decisiones informadas sobre su seguridad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#mapa">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                                <Eye className="h-5 w-5" />
                                Ver Mapa
                            </button>
                        </a>
                        <Link to="/crear-reporte">
                            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
                            <AlertTriangle className="h-5 w-5" />
                            Reportar Incidente
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
