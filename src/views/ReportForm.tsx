import { MapPin, Shield, AlertTriangle, Send, LetterText } from "lucide-react"
import { Link } from "react-router-dom"
import InputSelect from "../Components/Form/InputSelect"
import { useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useRef, useState } from "react"
type coordType = {lat?: number, lng?: number}
const ReportForm = ()=> {
    
    const autoCompleteInput = useRef(null)
    const placesLib = useMapsLibrary('places');

    const [coordenadas, setCoordenadas] = useState<coordType | null>(null)
    
    useEffect(()=> {
        if (!placesLib || !autoCompleteInput.current) return;
        
        const autoComplete = new placesLib.Autocomplete(autoCompleteInput.current, {
            types: ['geocode'],
            componentRestrictions: { country: 'mx' }
        })

        autoComplete.addListener('place_changed', ()=> {
            const place = autoComplete.getPlace()
            if (!place.geometry) return;

            const lat = place.geometry.location?.lat();
            const lng = place.geometry.location?.lng();

            setCoordenadas({lat, lng})
            console.log(coordenadas);
            
        })
    }, [placesLib, coordenadas])
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

        {/* Form Section */}
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Crear Nuevo Reporte</h2>
                <p className="text-slate-600">
                Ayuda a tu comunidad reportando incidentes de seguridad. Tu información es valiosa para mantener a todos
                seguros.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                    Información del Incidente
                </h3>
                <p className="text-slate-600">Completa los siguientes campos con la mayor precisión posible</p>
                </div>

                <form className="space-y-6">
                {/* Tipo de Incidente */}

                <InputSelect
                    label="Tipo de incidente *"
                    name="incident"
                    options={[]}
                    placeholder="Selecciona una opcion"
                />

                {/* Ubicación */}
                <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700">
                        Ubicación *
                    </label>
                    <div className="relative">
                    <MapPin className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                    <input
                        ref={autoCompleteInput}
                        id="location"
                        type="text"
                        placeholder="Ej: Av. Principal con Calle 5, cerca del parque"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        required
                    />
                    </div>
                    <p className="text-sm text-slate-500">
                    Proporciona referencias claras para ubicar el lugar del incidente
                    </p>
                </div>
                
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                        Titulo *
                    </label>
                    <div className="relative">
                    <LetterText className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                    <input
                        id="title"
                        type="text"
                        placeholder="Ej: Fuerte tiroteo"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        required
                    />
                    </div>
                    <p className="text-sm text-slate-500">
                        Maximo 50 caractéres
                    </p>
                </div>


                {/* Descripción */}
                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700">
                    Descripción del Incidente *
                    </label>
                    <textarea
                    id="description"
                    placeholder="Describe lo que ocurrió, cuándo sucedió, y cualquier detalle relevante..."
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors min-h-[120px] resize-vertical"
                    required
                    />
                    <p className="text-sm text-slate-500">
                    Incluye fecha, hora aproximada y cualquier detalle que pueda ser útil
                    </p>
                </div>

                {/* Información Adicional */}
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Información Importante
                    </h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Tu reporte será revisado por nuestro equipo antes de publicarse</li>
                    <li>• Los reportes son anónimos por defecto</li>
                    <li>• En caso de emergencia, contacta directamente a las autoridades</li>
                    <li>• No incluyas información personal sensible</li>
                    </ul>
                </div>

                {/* Botones */}
                <div className="flex gap-4 pt-4">
                    
                    <Link to="/" className="flex-1">
                        <button
                        type="button"
                        className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 py-3 rounded-lg transition-colors"
                        >
                        Cancelar
                        </button>
                    </Link>
                    <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg transition-colors flex items-center justify-center gap-2"                    
                    >
                        <Send className="w-4 h-4" />
                        Enviar Reporte
                    </button>
                </div>
                </form>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-red-800">¿Es una emergencia?</p>
                    <p className="text-sm text-red-700">
                    Si estás en peligro inmediato, no uses este formulario. Contacta directamente a los servicios de
                    emergencia.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }

export default ReportForm