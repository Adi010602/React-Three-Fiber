import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-80.0, -1.0, 0],
        center: [-19, -1],
        scale: 350
      }}

      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#0FC2D8"
        stroke="#ffffff"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[75.663280
            , 19.663280]}
        dx={-90}
        dy={30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
          {"India"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
