import { AdvancedMarker, APIProvider, Map as GMap } from "@vis.gl/react-google-maps"
import useIncidents from "../../hooks/useIncidents";
import { MapPin } from "lucide-react";
import MapReportCard from "./MapReportCard";
import { pinsList } from "../../assets/pins/pinsList";
import { useEffect } from "react";

const MapReport = () => {
    // Coordenadas base
    const base = { lat: 19.55654629773877, lng: -99.01916344930565 }
    const { incidents, currentIncident, handleCurrentIncident, getData } = useIncidents()

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className="flex-1 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden min-h-[480px]">
            <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                    <div className="lg:col-span-2 h-full rounded-lg overflow-hidden">
                        <GMap
                            mapId={'mainMap'}
                            style={{width: '100%', height: '50vh'}}
                            defaultCenter={base}
                            defaultZoom={15}
                            gestureHandling={'greedy'}
                            disableDefaultUI={true}
                        >
                            {incidents
                                ?.filter(incident =>
                                    typeof incident.latitude === 'number' &&
                                    typeof incident.longitude === 'number' &&
                                    !isNaN(incident.latitude) &&
                                    !isNaN(incident.longitude)
                                )
                                .map(incident => {
                                    const { latitude, longitude, category_id, id } = incident;
                                    return (
                                        <AdvancedMarker
                                            key={id}
                                            position={{ lat: latitude, lng: longitude }}
                                            onClick={() => handleCurrentIncident(incident.id)}
                                        >
                                            <img
                                                src={pinsList[category_id]}
                                                width={50}
                                                height={50}
                                                className="hover:w-[60px] hover:h-[60px] transition-all"
                                            />
                                        </AdvancedMarker>
                                    );
                                })}
                        </GMap>
                    </div>
                    <div>
                        {
                            !currentIncident
                            ? (
                                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                                    <p className="text-slate-600">Selecciona un marcador en el mapa para ver los detalles del reporte</p>
                                </div>
                            )
                            : (
                                <MapReportCard currentIncident={currentIncident} />
                            )
                        }
                        
                    </div>
                </div>
            </APIProvider>
        </div>
    );
}

export default MapReport
