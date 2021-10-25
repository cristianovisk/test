import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";
import * as positionData from "./data/positions.json";
import mapStyles from "./mapStyles";
import api from "./api";



const Map = () => {

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -3.7915048126179163, lng: -38.52786706024402 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {positionData.features.map((position) => (
        <Marker
          key={position.properties.position_ID}
          position={{
            lat: position.geometry.coordinates[0],
            lng: position.geometry.coordinates[1],
          }}
          icon={{
            url: `/marker_map_icon.svg`,
            scaledSize: new window.google.maps.Size(35, 35),
          }}
        />
      ))}{" "}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=***REMOVED***
        `}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
