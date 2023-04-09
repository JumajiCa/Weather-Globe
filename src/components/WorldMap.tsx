
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
  return (
    <ComposableMap>
      <ZoomableGroup center={[0, 0]} zoom={9}>
        <Geographies
          geography={geoUrl}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.7}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[0, 0]}>
          <circle r={3} fill="#FF5533" />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
