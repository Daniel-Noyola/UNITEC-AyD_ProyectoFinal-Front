import { createContext, useEffect, useState } from "react";
import { getIncidents } from "../api/incidents";
import type { IIncident, IIncidentsContext, ProviderProps } from "../types";


const IncidentsContext = createContext<IIncidentsContext | undefined>(undefined);

export const IncidentsProvider = ( { children }: ProviderProps ) => {
    const [incidents, setIncidents] = useState<IIncident[] | undefined>(undefined)
    const [currentIncident, setCurrentIncident] = useState<IIncident | undefined>(undefined)

    const getData = async ()=> {
        setIncidents(await getIncidents())
    }

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
        handleCurrentIncident
    }
    return(
        <IncidentsContext.Provider 
            value={value} >
            { children }
        </IncidentsContext.Provider>
    )
}

export default IncidentsContext