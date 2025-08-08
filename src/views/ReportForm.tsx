import { MapPin, Shield, AlertTriangle, Send, LetterText } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import InputSelect from "../Components/Form/InputSelect"
import { useMapsLibrary } from "@vis.gl/react-google-maps"
import { useEffect, useRef, useState } from "react"

import { useForm } from "react-hook-form"
import useIncidents from "../hooks/useIncidents"

import type { IIncidentPayload } from "../types/Incidents";
import useUsers from "../hooks/useUsers"
type coordType = {lat?: number, lng?: number}

// Vista del formulario para crear un reporte
const ReportForm = ()=> {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<IIncidentPayload>();
    const autoCompleteInput = useRef<HTMLInputElement | null>(null);
    const placesLib = useMapsLibrary('places');
    const [coordenadas, setCoordenadas] = useState<coordType | null>(null);
    const {uploadIncident, setIncidents } = useIncidents();
    const { user } = useUsers()
    const [feedback, setFeedback] = useState<{success: boolean, message: string} | null>(null);
    const navigate = useNavigate();


    useEffect(()=> {
        if (!placesLib || !autoCompleteInput.current) return;
        // Limita la zona de busqueda de direcciones a la ciudad y estado de mexico
        const bounds = {
            south: 18.9861,
            west: -100.1647,
            north: 19.8700,
            east: -98.6500
        };
        const autoComplete = new placesLib.Autocomplete(autoCompleteInput.current, {
            types: ['geocode'],
            componentRestrictions: { country: 'mx' },
            bounds,
            strictBounds: false
        });
        autoComplete.addListener('place_changed', ()=> {
            const place = autoComplete.getPlace();
            if (!place.geometry?.location) return;

            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setCoordenadas({lat, lng});

            if (typeof lat === 'number') setValue('latitude', lat);
            if (typeof lng === 'number') setValue('longitude', lng);
        });
    }, [placesLib, setValue]);

    const staticMapUrl = coordenadas
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${coordenadas.lat},${coordenadas.lng}&zoom=16&size=600x300&markers=color:red%7C${coordenadas.lat},${coordenadas.lng}&key=${import.meta.env.VITE_MAPS_API_KEY}`
    : null;
    
    // Funcion que maneja el envio de los datos del formulario
    const onSubmit = async (data: IIncidentPayload) => {
        // Asegura que el user_id sea el del usuario autenticado
        const payload = { ...data, user_id: user ? user.id : undefined };
        
        const response = await uploadIncident(payload);
        setFeedback({ success: response.success, message: response.message });
        if (response.success) {
            setIncidents(prev => [
                ...(prev || []),
                {
                    id: Date.now(), // id temporal
                    category_id: Number(payload.category_id),
                    description: payload.description,
                    direction: payload.direction,
                    latitude: payload.latitude,
                    longitude: payload.longitude,
                    title: payload.title,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                    user_id: user ? user.id : null,
                }
            ]);
            // Redirigir a la raíz y pasar las coordenadas del nuevo registro
            setTimeout(() => {
                navigate('/', { state: { newCoords: { latitude: payload.latitude, longitude: payload.longitude } } });
            }, 1800);
        }
    };

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

                {/* Formulario */}
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Tipo de Incidente (Categoria) */}
                <InputSelect 
                    label="Tipo de incidente *"
                    placeholder="Selecciona una opcion"
                    name="category_id"
                    id="category_id"
                    register={register("category_id", { required: 'Selecciona una categoria', validate: value => value !== "" || 'Selecciona una categoria' })}
                    errors= {errors.category_id}
                />

                {/* Ubicación */}
                <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700">
                        Ubicación *
                    </label>
                    <div className="relative">
                    <MapPin className="absolute left-3 top-4 h-4 w-4 text-slate-400" />
                    <input
                        id="location"
                        type="text"
                        placeholder="Ej: Av. Principal con Calle 5, cerca del parque"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        {...register("direction", { required: 'La ubicación es obligatoria' })}
                        ref={el => {
                            autoCompleteInput.current = el;
                            register("direction").ref(el);
                        }}
                    />
                    {errors.direction && (
                        <p className="text-red-600 text-sm mt-1">{errors.direction.message as string}</p>
                    )}
                    {/* Inputs ocultos para latitude/longitude
                    <input type="hidden" {...register("latitude", { required: 'Selecciona una ubicación válida en el mapa' })} />
                    <input type="hidden" {...register("longitude", { required: 'Selecciona una ubicación válida en el mapa' })} />
                    {(errors.latitude || errors.longitude) && (
                        <p className="text-red-600 text-sm mt-1">Selecciona una ubicación válida en el mapa</p>
                    )} */}
                    </div>
                    <p className="text-sm text-slate-500">
                    Proporciona referencias claras para ubicar el lugar del incidente
                    </p>

                    {/* Mapa estatico */}
                    {staticMapUrl && (
                        <div className="rounded-lg overflow-hidden shadow-md border mt-4">
                            <img
                            src={staticMapUrl}
                            alt="Vista previa del lugar"
                            className="w-full transition-opacity duration-700 ease-in-out"
                            />
                        </div>
                    )}
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
                        maxLength={50}
                        {...register("title", { 
                            required: 'Debes escribir el título',
                            maxLength: { value: 25, message: "Debe tener máximo 25 caractéres" },
                            minLength: { value: 10, message: 'Debe tener mínimo 10 caractéres' }
                        })}
                    />
                    {errors.title && (
                        <p className="text-red-600 text-sm mt-1">{errors.title.message as string}</p>
                    )}
                    </div>
                    <p className="text-sm text-slate-500">
                        Maximo 25 caractéres
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
                    {...register("description", { 
                        required: 'Tu reporte debe tener una descripción', 
                        minLength: { value: 10, message: 'Agrega una descripción más detallada' },
                        maxLength: { value: 200, message: 'Máximo 200 caractéres'} })}
                    />
                    {errors.description && (
                        <p className="text-red-600 text-sm mt-1">{errors.description.message as string}</p>
                    )}
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
                    {/* <li>• Tu reporte será revisado por nuestro equipo antes de publicarse</li> */}
                    <li>• Los reportes son anónimos por defecto</li>
                    <li>• En caso de emergencia, contacta directamente a las autoridades</li>
                    <li>• No incluyas información personal sensible</li>
                    </ul>
                </div>
                {/* Mensaje de respuesta */}
                {feedback && (
                    <div className={`mt-4 p-3 rounded-lg text-center font-semibold ${feedback.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {feedback.message}
                    </div>
                )}

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
                    disabled={isSubmitting}
                    >
                        <Send className="w-4 h-4" />
                        {isSubmitting ? 'Enviando...' : 'Enviar Reporte'}
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