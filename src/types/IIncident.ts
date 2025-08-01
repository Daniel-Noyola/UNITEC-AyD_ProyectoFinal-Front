export interface IIncident {
    category_id: number;
    created_at: string;   // Formato "YYYY-MM-DD HH:mm:ss"
    description: string;
    direction: string;
    id: number;
    latitude: number;     // Si quieres usarlo como número, cámbialo a number
    longitude: number;    // Si quieres usarlo como número, cámbialo a number
    title: string;
    updated_at: string;   // Formato "YYYY-MM-DD HH:mm:ss"
    user_id: number | null;
}

export interface IIncidentsContext {
    incidents: IIncident[] | undefined
    currentIncident: IIncident | undefined
    handleCurrentIncident(id: number): void
}