const Hero = () => {
    return (
        <section id="inicio" className="relative bg-blue-700 text-white py-24 text-center shadow-2xl overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <h1 className="text-6xl font-black mb-6 drop-shadow-lg tracking-tight">Tu Seguridad, Nuestra Prioridad</h1>
                    <p className="text-2xl mb-10 max-w-2xl mx-auto font-light">
                        Accede a información en tiempo real sobre la inseguridad en México.<br/>
                        Reporta incidentes para mantenerte informado.
                    </p>
                    <a href="#mapa" className="inline-block bg-white text-blue-700 hover:bg-blue-200 font-bold py-4 px-12 rounded-full text-xl shadow-lg transition duration-300">
                        Explorar el Mapa
                    </a>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L1440,96L1440,320L0,320Z"></path></svg>
                </div>
        </section>
    )
}

export default Hero
