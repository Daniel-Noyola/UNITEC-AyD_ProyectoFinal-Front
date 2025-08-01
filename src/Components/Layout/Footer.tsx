import { Shield } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-12 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Shield className="h-6 w-6 text-blue-400" />
                            <h4 className="text-xl font-bold">SafeMap</h4>
                        </div>
                        <p className="text-slate-400">
                            Construyendo comunidades más seguras a través de la colaboración ciudadana.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-4">Enlaces</h5>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                            <a href="#mapa" className="hover:text-white transition-colors">
                                Mapa
                            </a>
                            </li>
                            <li>
                            <a href="#reportes" className="hover:text-white transition-colors">
                                Reportes
                            </a>
                            </li>
                            <li>
                            <Link to="/crear-reporte" className="hover:text-white transition-colors">
                                Crear Reporte
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-4">Contacto</h5>
                        <p className="text-slate-400">Para emergencias, contacta directamente a las autoridades locales.</p>
                    </div>
                </div>
                <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                    <p>&copy; 2024 SafeMap. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
