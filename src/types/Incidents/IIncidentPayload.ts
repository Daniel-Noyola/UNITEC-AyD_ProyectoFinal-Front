export interface IIncidentPayload {
    category_id: string;
    description: string;
    direction: string;
    latitude: number;
    longitude: number;
    title: string;
    user_id?: number;
}
