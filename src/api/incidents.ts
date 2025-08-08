
import { isAxiosError } from "axios";
import apiConection from "./axios";
import type { ICategory, IIncident, IIncidentPayload } from "../types/Incidents";
import type { ApiResponse } from "../types/ApiResponse";


// Obtiene todos los incidentes registrados en la api
export async function getIncidents(userId?: number): Promise<ApiResponse<IIncident[]>> {
    try {
        const url = userId ? '/incidents/id' : '/incidents'
        const { data } = await apiConection.get<IIncident[]>(url, {
            params: userId ? {'user_id': userId} : undefined
        });
        
        return {
            success: true,
            message: "Incidentes obtenidos correctamente",
            data
        };
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            return {
                success: false,
                message: "Error de axios al obtener incidentes",
            };
        }
        return {
            success: false,
            message: "Error desconocido al obtener incidentes",
        };
    }
}

// Envia los datos de un incidente para guardarlos en la base de datos
export async function saveIncident(payload: IIncidentPayload): Promise<ApiResponse<null>> {
    try {
        const { status } = await apiConection.post("/incidents/store", payload);
        if (status === 201) {
            return {
                success: true,
                message: "Incidente guardado correctamente",
            };
        } else {
            return {
                success: false,
                message: "No se pudo guardar el incidente",
            };
        }
    } catch (error: unknown) {
        if (isAxiosError(error) && error.response?.status === 500) {
            return {
                success: false,
                message: "Error en el servidor al guardar el incidente",
            };
        }
        return {
            success: false,
            message: "Error desconocido al guardar el incidente",
        };
    }
}

export async function getApiCategories(): Promise<ApiResponse<ICategory[]>> {
    try {
        const { data } = await apiConection.get<ICategory[]>('/categories');
        return {
            success: true,
            message: "Categoria obtenidos correctamente",
            data
        };
    } catch (error: unknown) {
        if (isAxiosError(error)) {
            return {
                success: false,
                message: "Error de axios al obtener categorias",
            };
        }
        return {
            success: false,
            message: "Error desconocido al obtener categorias",
        };
    }
}
