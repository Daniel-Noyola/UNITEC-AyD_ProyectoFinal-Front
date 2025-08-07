import { LogOut, Plus, Shield, User } from "lucide-react"
import { Link } from "react-router-dom"
import useUsers from "../../hooks/useUsers"

const AuthHeader = () => {
    const { user, logout } = useUsers()

    return (
        <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-800">RiskMap</h1>
                </Link>

                <div className="flex items-center space-x-4">
                <div className="hidden md:flex items-center space-x-2 text-slate-600">
                    <User className="h-5 w-5" />
                    <span>Hola, {user?.name}</span>
                </div>
                <Link to="/crear-reporte">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    <span className="hidden sm:inline">Nuevo Reporte</span>
                    </button>
                </Link>
                <button
                    onClick={logout}
                    className="text-slate-600 hover:text-red-600 p-2 rounded-lg transition-colors"
                    title="Cerrar sesión"
                >
                    <LogOut className="h-5 w-5" />
                </button>
                </div>
            </div>
            </div>
        </header>
    )
}

export default AuthHeader
