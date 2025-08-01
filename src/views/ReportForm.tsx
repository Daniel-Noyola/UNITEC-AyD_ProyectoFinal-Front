import type React from "react"

import { useEffect, useState } from "react"
import { MapPin, Shield, AlertTriangle, Send } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const ReportForm = ()=> {
    const {pathname} = useLocation()
    const [formData, setFormData] = useState({
        type: "",
        description: "",
        location: "",
        severity: "",
        anonymous: true,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simular envío del formulario
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)

    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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

                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tipo de Incidente */}
                <div className="space-y-2">
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700">
                    Tipo de Incidente *
                    </label>
                    <select
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    required
                    >
                    <option value="">Selecciona el tipo de incidente</option>
                    <option value="robo">Robo</option>
                    <option value="asalto">Asalto</option>
                    <option value="vandalismo">Vandalismo</option>
                    <option value="trafico-drogas">Tráfico de Drogas</option>
                    <option value="iluminacion">Iluminación Deficiente</option>
                    <option value="infraestructura">Infraestructura Dañada</option>
                    <option value="actividad-sospechosa">Actividad Sospechosa</option>
                    <option value="otro">Otro</option>
                    </select>
                </div>

                {/* Ubicación */}
                <div className="space-y-2">
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700">
                    Ubicación *
                    </label>
                    <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <input
                        id="location"
                        type="text"
                        placeholder="Ej: Av. Principal con Calle 5, cerca del parque"
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        value={formData.location}
                        onChange={(e) => handleInputChange("location", e.target.value)}
                        required
                    />
                    </div>
                    <p className="text-sm text-slate-500">
                    Proporciona referencias claras para ubicar el lugar del incidente
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
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    required
                    />
                    <p className="text-sm text-slate-500">
                    Incluye fecha, hora aproximada y cualquier detalle que pueda ser útil
                    </p>
                </div>

                {/* Nivel de Severidad */}
                <div className="space-y-2">
                    <label htmlFor="severity" className="block text-sm font-medium text-slate-700">
                    Nivel de Severidad *
                    </label>
                    <select
                    className="w-full px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    value={formData.severity}
                    onChange={(e) => handleInputChange("severity", e.target.value)}
                    required
                    >
                    <option value="">Selecciona el nivel de severidad</option>
                    <option value="low">🟢 Baja - Problema menor, no urgente</option>
                    <option value="medium">🟡 Media - Requiere atención</option>
                    <option value="high">🔴 Alta - Situación peligrosa</option>
                    </select>
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
                    disabled={
                        isSubmitting || !formData.type || !formData.location || !formData.description || !formData.severity
                    }
                    >
                    {isSubmitting ? (
                        <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                        </>
                    ) : (
                        <>
                        <Send className="w-4 h-4" />
                        Enviar Reporte
                        </>
                    )}
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