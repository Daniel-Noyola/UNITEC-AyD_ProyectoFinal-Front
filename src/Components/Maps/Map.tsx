import { AdvancedMarker, APIProvider, Map as GMap } from "@vis.gl/react-google-maps"

const Map = () => {
    return (
        <div className="flex-1 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden min-h-[480px]">
            <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                    <div className="lg:col-span-2 h-full rounded-lg overflow-hidden">
                    <GMap
                    mapId={'mainMap'}
                    style={{width: '100%', height: '50vh'}}
                    defaultCenter={{lat: 19.55654629773877, lng: -99.01916344930565}}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}>
                        <AdvancedMarker 
                            position={{lat: 19.55654629773877, lng: -99.01916344930565}}                    >
                        </AdvancedMarker>
                    </GMap>
                    </div>
                    <div>
                        <h1 className="text-center">Panel de reporte</h1>
                    </div>
                </div>
                
            </APIProvider>
        </div>
    )
}

export default Map
