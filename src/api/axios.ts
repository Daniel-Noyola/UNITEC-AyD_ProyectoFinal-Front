import axios, { type AxiosInstance } from "axios";

// Realiza la conexion principal con la API
const apiConection: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default apiConection