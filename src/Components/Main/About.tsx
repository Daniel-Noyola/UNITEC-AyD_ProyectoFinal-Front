import { Eye, MapPin, Users } from "lucide-react"

const About = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">¿Cómo funciona SafeMap?</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Nuestra plataforma facilita la colaboración ciudadana para crear un entorno más seguro
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="h-8 w-8 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3">Reporta Incidentes</h4>
                        <p className="text-slate-600">
                            Comparte información sobre incidentes de seguridad en tu zona de manera rápida y anónima
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Eye className="h-8 w-8 text-green-600" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3">Visualiza en Tiempo Real</h4>
                        <p className="text-slate-600">
                            Consulta el mapa interactivo para conocer la situación de seguridad en diferentes áreas
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Colabora con tu Comunidad</h4>
                    <p className="text-slate-600">
                        Únete a una red de ciudadanos comprometidos con la seguridad de su comunidad
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
