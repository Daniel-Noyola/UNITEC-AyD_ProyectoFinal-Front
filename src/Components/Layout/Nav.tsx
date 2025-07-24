const Nav = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-800 to-blue-600 py-4 shadow-xl sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#" className="flex items-center gap-2 text-white text-2xl font-black tracking-tight">
                    <img src="https://img.icons8.com/ios-filled/40/ffffff/security-checked.png" alt="Logo" className="w-8 h-8"/>
                    SeguridadMX
                </a>
                <div className="space-x-2">
                    <a href="#inicio" className="inline-block px-5 py-2 rounded-full font-semibold text-white hover:bg-blue-900 transition duration-200">
                        Inicio
                    </a>
                    <a href="#mapa" className="inline-block px-5 py-2 rounded-full font-semibold text-white hover:bg-blue-900 transition duration-200">
                        Mapa Interactivo
                    </a>
                    <a href="#reportar" className="inline-block px-5 py-2 rounded-full font-semibold text-blue-700 bg-white hover:bg-blue-100 transition duration-200 shadow">
                        Reportar Incidente
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
