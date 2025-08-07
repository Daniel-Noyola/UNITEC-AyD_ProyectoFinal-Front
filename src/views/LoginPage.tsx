import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Shield, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import type { LoginFormData } from "../types/Form"
import useUsers from "../hooks/useUsers"

const LoginPage = ()=> {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>();
    const { tryLogin, isAuthenticated } = useUsers();
    const [loginError, setLoginError] = useState<string | null>(null);

    const onSubmit = async (data: LoginFormData) => {
        const result = await tryLogin(data);
        if (result) {
            setLoginError(null);
            navigate('/usuario/dashboard');
        } else {
            setLoginError('Credenciales no válidas');
        }
    };

    useEffect(()=> {
        if (isAuthenticated) navigate('/usuario/dashboard')
    })
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-slate-800">RiskMap</h1>
            </Link>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Iniciar Sesión</h2>
            <p className="text-slate-600">Accede a tu cuenta para gestionar tus reportes</p>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {loginError && (
                    <div className="mb-4 p-3 rounded-lg text-center font-semibold bg-red-100 text-red-800">
                        {loginError}
                    </div>
                )}
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Correo Electrónico
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            {...register("email", {
                                required: 'El correo es obligatorio',
                                pattern: {
                                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                    message: 'Correo electrónico inválido'
                                }
                            })}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email.message as string}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                        Contraseña
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Tu contraseña"
                            className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            {...register("password", {
                                required: 'La contraseña es obligatoria',
                                minLength: { value: 6, message: 'Mínimo 6 caractéres' }
                            })}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="text-red-600 text-sm mt-1">{errors.password.message as string}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                    {(isSubmitting) ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Iniciando sesión...
                        </>
                    ) : (
                        "Iniciar Sesión"
                    )}
                </button>
            </form>

            {/* Links */}
            <div className="mt-6 text-center space-y-2">
                <p className="text-slate-600">
                ¿No tienes cuenta?{" "}
                <Link to="/registro" className="text-blue-600 hover:text-blue-700 font-medium">
                    Regístrate aquí
                </Link>
                </p>
                <Link to="/" className="text-slate-500 hover:text-slate-700 text-sm">
                Volver al inicio
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default LoginPage