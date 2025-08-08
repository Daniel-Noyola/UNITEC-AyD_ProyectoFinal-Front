import { createContext, useState, useCallback } from "react";

import { getApiCategories, getIncidents, saveIncident } from "../api/incidents";
import { type IIncident, type IIncidentsContext, type IIncidentPayload, type ICategory } from "../types/Incidents";
import type { ProviderProps } from "../types/ProviderProps";
import useUsers from "../hooks/useUsers";

const IncidentsContext = createContext<IIncidentsContext | undefined>(undefined);

//* Provider que almacena la logica de los incidentes
export const IncidentsProvider = ( { children }: ProviderProps ) => {
    const [incidents, setIncidents] = useState<IIncident[] | undefined>(undefined)
    const [currentIncident, setCurrentIncident] = useState<IIncident | undefined>(undefined)
    const [categories, setCategories] = useState<ICategory[] | undefined> (undefined)
    const [currentCategory, setCurrentCategory] = useState<ICategory | undefined> (undefined)
    const { user } = useUsers();

    //* Carga los incidentes obtenidos de la api
    const getData = useCallback(async () => {
        const { success, data } = await getIncidents()
        if (success && data) {
            setIncidents(data)
        } else {
            setIncidents([])
        }
    }, []);

    const getUserIncidents = useCallback(async () => {
        const { success, data } = await getIncidents(user?.id)
        if (success && data) {
            setIncidents(data)
        } else {
            setIncidents([])
        }
    }, [user?.id]);

    const getCategories = useCallback(async () => {
        const { success, data } = await getApiCategories()
        if (success && data) {
            setCategories(data)
        } else {
            setCategories([])
        }

    }, [])

    //* Envia los datos de un incidente a la api para registrarlo 
    const uploadIncident = async (payload: IIncidentPayload) => {
        const response = await saveIncident(payload)
        
        if (!response.success) {
            console.error(response.message)
        }
        return response;
    };

    // Actualiza el incidente seleccionado
    const handleCurrentIncident = (id: number)=> {
        const incident = incidents?.find(incident => incident.id === id)
        setCurrentIncident(incident)
    }

    const handleCurrentCategory = (id?: number)=> {
        const category = categories?.find(category => category.id === id)
        setCurrentCategory(category)
    }

    const value: IIncidentsContext = {
        incidents,
        categories,
        currentIncident,
        currentCategory,
        handleCurrentIncident,
        handleCurrentCategory,
        uploadIncident,
        setIncidents,
        getData,
        getUserIncidents,
        getCategories
    };
    return(
        <IncidentsContext.Provider 
            value={value} >
            { children }
        </IncidentsContext.Provider>
    )
}

export default IncidentsContext