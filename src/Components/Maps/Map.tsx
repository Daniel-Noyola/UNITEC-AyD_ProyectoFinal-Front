import { APIProvider, Map as GMap, Marker } from "@vis.gl/react-google-maps"

const Map = () => {
    return (
        <>
            <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
                <GMap
                    style={{width: '100%', height: '50vh'}}
                    defaultCenter={{lat: 19.55654629773877, lng: -99.01916344930565}}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                >
                    <Marker position={{lat: 19.55654629773877, lng: -99.01916344930565}}/>
                </GMap>
            </APIProvider>
        </>
    )
}

export default Map
