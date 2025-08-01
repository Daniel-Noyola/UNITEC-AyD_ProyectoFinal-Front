import { isAxiosError } from "axios";
import apiConection from "./axios";

export async function getIncidents()
{
    try {
        const { data } = await apiConection.get('/incidents')
        return data

    } catch (error) {
        if(isAxiosError(error))
        {
            console.log("Error de axios get");
        }
    }
    
    return null
}