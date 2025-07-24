import apiConection from "../api/axios"
import { useEffect } from "react"
import Map from "../Components/Maps/Map"
import Hero from "../Components/Main/Hero"
import About from "../Components/Main/About"
import PointInfo from "../Components/Maps/PointInfo"

const Main = () => {

    useEffect(() => {
        const test = async ()=> {
            const {data} = await apiConection('')
            console.log(data);
        }
        test()
    }, [])

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
            <Hero/>
            <About/>

            {/* Mapa + Info */}
            <section id="mapa" className="py-20 bg-gradient-to-br from-blue-100 to-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-700">Mapa Interactivo de Inseguridad</h2>
                    <p className="text-center text-lg mb-10 max-w-2xl mx-auto text-gray-700">
                        Visualiza zonas marcadas con niveles de inseguridad basados en los reportes de nuestra comunidad.<br/>
                        Haz clic en los marcadores para ver detalles de los incidentes.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-8">
                        <Map/>
                        <PointInfo/>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-6">
                        *Los datos del mapa se actualizan en tiempo real con los reportes de los usuarios.
                    </p>
                </div>
            </section>

            {/* Reportar */}
            <section id="reportar" className="py-20 bg-blue-700 text-white text-center shadow-2xl">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold mb-8">Reporta un Incidente</h2>
                    <p className="text-2xl mb-8 max-w-3xl mx-auto font-light">
                        Tu contribución es vital para mantener nuestra comunidad informada y segura.
                        Ayúdanos a construir un panorama de seguridad más preciso.
                    </p>
                    <a href="#" className="bg-white text-blue-700 hover:bg-blue-200 font-bold py-4 px-12 rounded-full text-xl shadow-lg transition duration-300">
                        Reportar Ahora
                    </a>
                    <p className="text-sm mt-6 opacity-80">
                        *Se te pedirá información sobre la ubicación y el tipo de incidente.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Main
