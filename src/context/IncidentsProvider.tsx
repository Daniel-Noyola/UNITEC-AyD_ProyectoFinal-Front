import { createContext, useEffect, useState } from "react";

import { getIncidents, saveIncident } from "../api/incidents";
import type { IIncident, IIncidentsContext, IIncidentPayload } from "../types/Incidents";
import type { ProviderProps } from "../types/ProviderProps";

const IncidentsContext = createContext<IIncidentsContext | undefined>(undefined);

//* Provider que almacena la logica de los incidentes
export const IncidentsProvider = ( { children }: ProviderProps ) => {
    const [incidents, setIncidents] = useState<IIncident[] | undefined>(undefined)
    const [currentIncident, setCurrentIncident] = useState<IIncident | undefined>(undefined)

    //* Carga los incidentes obtenidos de la api
    const getData = async () => {
        const response = await getIncidents();
        if (response.success && response.data) {
            setIncidents(response.data);
        } else {
            setIncidents([]);
    };
    }

    //* Envia los datos de un incidente a la api para registrarlo 
    const uploadIncident = async (payload: IIncidentPayload) => {
        const response = await saveIncident(payload);
        
        if (!response.success) {
            console.error(response.message);
        }
        return response;
    };

    // Actualiza el incidente seleccionado
    const handleCurrentIncident = (id: number)=> {
        const incident = incidents?.find(incident => incident.id === id);
        setCurrentIncident(incident)
    }


    useEffect(()=> {
        getData()
    }, [])

    const value: IIncidentsContext = {
        incidents,
        currentIncident,
        handleCurrentIncident,
        uploadIncident,
    };
    return(
        <IncidentsContext.Provider 
            value={value} >
            { children }
        </IncidentsContext.Provider>
    )
}

export default IncidentsContext