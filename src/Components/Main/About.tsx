const About = () => {
    return (
        <section id="sobre-nosotros" className="py-20 bg-white">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img src="https://img.icons8.com/ios-filled/200/4e73df/security-checked.png" alt="Seguridad" className="w-40 h-40 opacity-90"/>
                    </div>
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6 text-blue-700">¿Por qué SeguridadMX?</h2>
                        <div className="text-lg leading-relaxed text-gray-700">
                            <p className="mb-4">
                                La inseguridad es una preocupación constante en México. Nuestra plataforma busca empoderar a la ciudadanía
                                proporcionando una herramienta colaborativa para visualizar y comprender los patrones de incidentes en su entorno.
                                Creemos que la información es clave para tomar decisiones informadas y fomentar comunidades más seguras.
                            </p>
                            <p>
                                Desarrollado con PHP y JavaScript, este proyecto universitario integra un mapa interactivo basado en reportes de usuarios
                                sobre la situación de seguridad, desde accidentes viales hasta asaltos y robos.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default About
