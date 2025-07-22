import axios, { type AxiosInstance } from "axios";

const apiConection: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': import.meta.env.VITE_API_KEY
    },
})

export default apiConection