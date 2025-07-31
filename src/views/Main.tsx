import apiConection from "../api/axios"
import { useEffect } from "react"
import Map from "../Components/Maps/Map"
import Hero from "../Components/Main/Hero"
import About from "../Components/Main/About"
// import PointInfo from "../Components/Maps/PointInfo"

const Main = () => {

    useEffect(() => {
        const test = async ()=> {
            const {data} = await apiConection('/test')
            console.log(data);
        }
        test()
    }, [])

    return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
            <Hero/>
            <About/>

            {/* Mapa + Info */}
            <section id="mapa" className="py-16 px-4 bg-slate-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Mapa de Incidentes</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                        Explora los reportes de seguridad en tu área. Haz clic en los marcadores para ver más detalles.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <Map/>
                    </div>
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
