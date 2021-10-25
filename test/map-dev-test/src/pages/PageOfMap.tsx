import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './PageOfMap.css';
import apiCall from "../api/api";

export interface pageOfMapProps {
}

const apiRes = apiCall()


const PageOfMap = () => {


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "***REMOVED***"
    })

    const center = {
        lat: -3.7915048126179163,
        lng: -38.52786706024402,
    };

    return (
        <div className="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={center}
                    zoom={12}
                >
                    <Marker
                        position={center}
                        options={{
                            label: {
                                text: "Center",
                                className: "map-marker",
                            },
                        }}
                    />

                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
};


export default PageOfMap