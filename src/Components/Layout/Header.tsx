import { ArrowLeft, Plus, Shield, Menu } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const isLocationForm = location.pathname === "/crear-reporte"

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = ()=> {
        setMenuOpen(false); 
        if(window.history.length > 2) navigate(-1)
        else navigate('/')
    }
    return (
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <Shield className="h-8 w-8 text-blue-600" />
                        <h1 className="text-2xl font-bold text-slate-800">RiskMap</h1>
                    </Link>

                    {/* Menú hamburguesa solo en móviles */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-600 hover:text-blue-600 focus:outline-none">
                            <Menu className="h-7 w-7" />
                        </button>
                        {menuOpen && (
                            <div className="absolute right-4 top-16 bg-white rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4 z-50 min-w-[180px] border">
                                {isLocationForm ? (
                                    <button onClick={handleClick} className="text-slate-600 hover:text-blue-600 flex items-center gap-2 transition-colors">
                                        <ArrowLeft className="h-4 w-4" /> Volver
                                    </button>
                                ) : (
                                    <>
                                        <a href="#mapa" className="text-slate-600 hover:text-blue-600 transition-colors" onClick={()=>setMenuOpen(false)}>
                                            Mapa
                                        </a>
                                        <a href="#reportes" className="text-slate-600 hover:text-blue-600 transition-colors" onClick={()=>setMenuOpen(false)}>
                                            Reportes
                                        </a>
                                        <a href="/login" className="text-slate-600 hover:text-blue-600 transition-colors" onClick={()=>setMenuOpen(false)}>
                                            Iniciar Sesión
                                        </a>
                                        <Link to="/crear-reporte" onClick={()=>setMenuOpen(false)}>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors w-full justify-center">
                                                <Plus className="h-4 w-4" /> Crear Reporte
                                            </button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Menú normal en desktop */}
                    {isLocationForm
                        ? (
                            <nav className="hidden md:flex items-center space-x-6">
                                <button onClick={()=> window.history.length > 2 ? navigate(-1) : navigate('/')} className="cursor-pointer">
                                    <p className="text-slate-600 hover:text-blue-600 flex items-center gap-2 transition-colors">
                                    <ArrowLeft className="h-4 w-4" />
                                    Volver
                                    </p>
                                </button>
                            </nav>
                        )
                        : (
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
                                <Link to="/crear-reporte">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                    <Plus className="h-4 w-4" />
                                    Crear Reporte
                                    </button>
                                </Link>
                            </nav>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header
