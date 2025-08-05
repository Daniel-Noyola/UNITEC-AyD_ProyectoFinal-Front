import { useContext } from "react"
import IncidentsContext from "../context/IncidentsProvider"
import type { IIncidentsContext } from "../types/Incidents";

const useIncidents = (): IIncidentsContext => {
    const context = useContext(IncidentsContext);
    if(!context) throw new Error("El hook se debe usar dentro de un provider")
    
    return context
}

export default useIncidents