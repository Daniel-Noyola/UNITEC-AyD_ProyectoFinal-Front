import { createContext, useEffect, useState } from "react";
import { getIncidents } from "../api/incidents";
import type { IIncident, IIncidentsContext, ProviderProps } from "../types";


const IncidentsContext = createContext<IIncidentsContext | undefined>(undefined);

export const IncidentsProvider = ( { children }: ProviderProps ) => {
    const [incidents, setIncidents] = useState<IIncident[] | null>(null)

    const getData = async ()=> {
        setIncidents(await getIncidents())
    }


    useEffect(()=> {
        getData()
    }, [])

    const value: IIncidentsContext = {
        incidents
    }
    return(
        <IncidentsContext.Provider 
            value={value} >
            { children }
        </IncidentsContext.Provider>
    )
}

export default IncidentsContext