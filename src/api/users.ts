import { isAxiosError } from "axios";
import type { ApiResponse } from "../types/ApiResponse";
import apiConection from "./axios";
import type { IRegisterPayload, IUser } from "../types/Users";
import type { ILoginPayload } from "../types/Users/ILoginPayload";

export async function registerUser(payload: IRegisterPayload): Promise<ApiResponse<null>> {
    try {
        const { status, data } = await apiConection.post('/user/store', payload)
    
        if(status === 201) return { success: true, message: data.message }
        else return {success: true, message: "Peticion desconocida"} 
        
    } catch (error) {
        if (isAxiosError(error) && error.response?.status === 500) {
                    return {
                        success: false,
                        message: "Error en el servidor al guardar el incidente",
                    };
                }
        if (isAxiosError(error) && error.response) {
            return {
                success: false,
                message: error.response.data.message,
            };
        }
        return {
            success: false,
            message: "Error desconocido al guardar el incidente",
        };

    }
}

export async function loginUser(payload: ILoginPayload): Promise<ApiResponse<IUser>> {
    try {
        const { status, data } = await apiConection.post('/user/login', payload)
        if (status === 200) return {success: true, message: 'Usuario autenticado', data}
        else return {success: false, message: "proceso desconocido"}
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            return {
                success: false,
                message: error.response.data.message,
            };
        }
        return {
            success: false,
            message: 'Error desconocido'
        }
    }
}