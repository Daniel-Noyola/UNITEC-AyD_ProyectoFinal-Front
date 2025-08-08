export interface IIncident {
    category_id: number;
    created_at: string;   // Formato "YYYY-MM-DD HH:mm:ss"
    description: string;
    direction: string;
    id: number;
    latitude: number; 
    longitude: number;
    title: string;
    updated_at: string;   // Formato "YYYY-MM-DD HH:mm:ss"
    user_id: number | null;
}

import type { ApiResponse } from '../ApiResponse';
import type { ICategory } from './ICategory';
import type { IIncidentPayload } from './IIncidentPayload';
import type { Dispatch, SetStateAction } from 'react';

export interface IIncidentsContext {
    incidents: IIncident[] | undefined;
    categories: ICategory[] | undefined
    currentIncident: IIncident | undefined;
    currentCategory: ICategory | undefined;
    handleCurrentIncident(id: number): void;
    uploadIncident(payload: IIncidentPayload): Promise<ApiResponse<null>>;
    setIncidents: Dispatch<SetStateAction<IIncident[] | undefined>>;
    handleCurrentCategory(id: number | undefined) : void
    getData(): Promise<void>
    getUserIncidents(): Promise<void>
    getCategories(): Promise<void>
}