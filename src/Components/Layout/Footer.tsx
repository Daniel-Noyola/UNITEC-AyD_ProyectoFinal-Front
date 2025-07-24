const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col items-center text-center text-base">
                <div className="flex items-center gap-2 mb-2">
                    <img src="https://img.icons8.com/ios-filled/32/ffffff/security-checked.png" alt="Logo" className="w-6 h-6"/>
                    <span className="font-bold text-lg">SeguridadMX</span>
                </div>
                <p className="opacity-90">&copy; 2025 SeguridadMX. Todos los derechos reservados.</p>
                <p className="mt-1 text-blue-100">Proyecto Universitario de Análisis y Diseño de Software.</p>
            </div>
        </footer>
    )
}

export default Footer
