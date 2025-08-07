    import { useEffect } from "react"
    import { Plus, MapPin, Clock, AlertTriangle, User, Edit, Trash2 } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import useUsers from "../hooks/useUsers"
import formatDate from "../helpers/date"
import useIncidents from "../hooks/useIncidents"

export default function DashboardPage() {
    const { user, setUser} = useUsers()
    const { getUserIncidents, incidents } = useIncidents()
    // const [selectedReport, setSelectedReport] = useState<Report | null>(null)
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    
    useEffect(()=> {
        if(!user) {
            navigate('/login')
            return
        }
    }, [user, navigate])

    useEffect(() => {
        if (user) getUserIncidents();
    }, [user, getUserIncidents]);


    useEffect(() => {
        // Verificar si el usuario está autenticado
        const userData = localStorage.getItem("user")
        if (!userData) {
            navigate('/login')
            return;
        }
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
    }, [navigate, setUser])

    // const handleReportClick = (report: Report) => {
    //     setSelectedReport(report)
    //     setIsModalOpen(true)
    // }

    // const handleCloseModal = () => {
    //     setIsModalOpen(false)
    //     setSelectedReport(null)
    // }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Mi Dashboard</h2>
            <p className="text-slate-600">Gestiona tus reportes de seguridad y mantente informado sobre tu comunidad</p>
            </div>

            {/* Reports Section */}
            <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-800">Mis Reportes</h3>
                <Link to="/crear-reporte">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    Nuevo Reporte
                    </button>
                </Link>
                </div>
            </div>

            <div className="p-6">
                {incidents?.length === 0 ? (
                <div className="text-center py-12">
                    <AlertTriangle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-slate-600 mb-2">No tienes reportes aún</h4>
                    <p className="text-slate-500 mb-6">Comienza a contribuir con la seguridad de tu comunidad</p>
                    <Link to="/crear-reporte">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
                        <Plus className="h-5 w-5" />
                        Crear Mi Primer Reporte
                    </button>
                    </Link>
                </div>
                ) : (
                <div className="space-y-4">
                    {incidents?.map((report) => (
                    <div
                        key={report.id}
                        className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                        // onClick={() => handleReportClick(report)}
                    >
                        {/* Mantener todo el contenido del reporte igual, pero agregar un indicador de que es clickeable */}
                        <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            
                            <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                            <MapPin className="w-4 h-4" />
                            {report.direction}
                            </div>

                            <p className="text-slate-700 mb-3 line-clamp-2">{report.description}</p>

                            <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Clock className="w-4 h-4" />
                                {formatDate(report.created_at)}
                            </div>
                            <div className="text-xs text-blue-600 font-medium">Haz clic para ver detalles →</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 ml-4">
                            <button
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={(e) => {
                                e.stopPropagation()
                                // Lógica para editar
                            }}
                            >
                            <Edit className="h-4 w-4" />
                            </button>
                            <button
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            onClick={(e) => {
                                e.stopPropagation()
                                // Lógica para eliminar
                            }}
                            >
                            <Trash2 className="h-4 w-4" />
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Acciones Rápidas</h4>
                <div className="space-y-3">
                <Link to="/crear-reporte">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-3">
                    <Plus className="h-5 w-5 text-blue-600" />
                    <span>Crear nuevo reporte</span>
                    </button>
                </Link>
                <Link to="/#mapa">
                    <button className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Ver mapa de incidentes</span>
                    </button>
                </Link>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Información de Cuenta</h4>
                <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-600">{user?.name}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-600">{user?.email}</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* <ReportDetailModal report={selectedReport} isOpen={isModalOpen} onClose={handleCloseModal} /> */}
        </div>
    )
    }

    // Import missing Mail icon
    function Mail({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
        </svg>
    )
}
