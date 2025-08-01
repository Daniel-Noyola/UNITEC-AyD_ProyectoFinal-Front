import { AdvancedMarker, APIProvider, Map as GMap } from "@vis.gl/react-google-maps"
import useIncidents from "../../hooks/useIncidents";
// import { DrugsPin } from "../../assets/pins";
import { AssaultPin, DrugsPin, InfraPin, LightPin, OtherPin, RobberPin, SuspiciousPin, VandalPin } from "../../assets/pins";

const pins: Record<number, string> = {
    1: AssaultPin,
    2: DrugsPin,
    3: InfraPin,
    4: LightPin,
    5: RobberPin,
    6: SuspiciousPin,
    7: VandalPin,
    8: OtherPin
}
const MapReport = () => {
    // Coordenadas base
    const base = { lat: 19.55654629773877, lng: -99.01916344930565 }
    const { incidents } = useIncidents()
    console.log(incidents);
    
    
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
                            {incidents?.map(incident => {
                                const {latitude, longitude, category_id, id} = incident
                                return(
                                <AdvancedMarker key={id} position={{lat: latitude, lng:longitude}}>
                                    <img src={pins[category_id]} /> 
                                </AdvancedMarker>
                                )
                            })}
                            <AdvancedMarker position={base}>
                                <img src={DrugsPin} />
                            </AdvancedMarker>
                        </GMap>
                    </div>
                    <div>
                        <h1 className="text-center">Panel de reporte</h1>
                    </div>
                </div>
            </APIProvider>
        </div>
    );
}

export default MapReport
