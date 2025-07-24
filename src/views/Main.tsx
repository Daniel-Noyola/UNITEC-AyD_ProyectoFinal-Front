import apiConection from "../api/axios"

import { useEffect } from "react"
import Map from "../Components/Maps/Map"

const Main = () => {

    useEffect(() => {
        const test = async ()=> {
            const {data} = await apiConection('')
            console.log(data);
        }

        test()
    }, [])

    return (
        <main>
            <section id="inicio" className="bg-blue-600 text-white py-20 text-center shadow-lg">
        <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold mb-4">Tu Seguridad, Nuestra Prioridad</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
                Accede a información en tiempo real sobre la inseguridad en México.
                Reporta incidentes para mantenerte informado.
            </p>
            <a href="#mapa" className="bg-white text-blue-700 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Explorar el Mapa
            </a>
        </div>
    </section>

    <section id="sobre-nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-700">¿Por qué SeguridadMX?</h2>
            <div className="max-w-4xl mx-auto text-lg leading-relaxed">
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
    </section>

    <section id="mapa" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Mapa Interactivo de Inseguridad</h2>
            <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
                Visualiza zonas marcadas con niveles de inseguridad basados en los reportes de nuestra comunidad.
                Haz clic en los marcadores para ver detalles de los incidentes.
            </p>
            <div id="map" className="rounded-lg shadow-xl border border-gray-200">
                <Map/>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
                *Los datos del mapa se actualizan en tiempo real con los reportes de los usuarios.
            </p>
        </div>
    </section>

    <section id="reportar" className="py-16 bg-blue-700 text-white text-center shadow-lg">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Reporta un Incidente</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
                Tu contribución es vital para mantener nuestra comunidad informada y segura.
                Ayúdanos a construir un panorama de seguridad más preciso.
            </p>
            <a href="#" className="bg-white text-blue-700 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Reportar Ahora
            </a>
            <p className="text-sm mt-4 opacity-80">
                *Se te pedirá información sobre la ubicación y el tipo de incidente.
            </p>
        </div>
    </section>
        </main>
    )
}

export default Main
