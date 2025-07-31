import { Plus, Shield } from "lucide-react"

const Header = () => {
    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-800">SafeMap</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
            <a href="#mapa" className="text-slate-600 hover:text-blue-600 transition-colors">
                Mapa
            </a>
            <a href="#reportes" className="text-slate-600 hover:text-blue-600 transition-colors">
                Reportes
            </a>
            <a href="/login" className="text-slate-600 hover:text-blue-600 transition-colors">
                Iniciar Sesión
            </a>
            <a href="/crear-reporte">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Plus className="h-4 w-4" />
                Crear Reporte
                </button>
            </a>
            </nav>
        </div>
        </div>
    </header>
    )
}

export default Header
