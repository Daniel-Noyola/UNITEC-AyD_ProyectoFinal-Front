const Nav = () => {
    return (
    <nav className="bg-blue-700 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-2xl font-bold">SeguridadMX</a>
            <div className="space-x-4">
                <a href="#inicio" className="text-white hover:text-blue-200">Inicio</a>
                <a href="#mapa" className="text-white hover:text-blue-200">Mapa Interactivo</a>
                <a href="#reportar" className="text-white hover:text-blue-200">Reportar Incidente</a>
            </div>
        </div>
    </nav>
    )
}

export default Nav
