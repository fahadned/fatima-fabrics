"use client";

import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Numeric ISO-3166 codes used by world-atlas
const HIGHLIGHTED = new Set([
  "826", // United Kingdom
  "372", // Ireland
  "276", // Germany
  "250", // France
  "528", // Netherlands
  "56",  // Belgium
  "724", // Spain
  "620", // Portugal
  "380", // Italy
  "752", // Sweden
  "208", // Denmark
  "578", // Norway
  "616", // Poland
  "40",  // Austria
  "756", // Switzerland
  "203", // Czech Republic
  "246", // Finland
  "352", // Iceland
]);

const LABELS: Array<{ name: string; coords: [number, number] }> = [
  { name: "UK",          coords: [-2,    53.5] },
  { name: "Ireland",     coords: [-8,    53.2] },
  { name: "Germany",     coords: [10.5,  51.2] },
  { name: "France",      coords: [2.5,   46.5] },
  { name: "Netherlands", coords: [5.3,   52.4] },
  { name: "Belgium",     coords: [4.5,   50.5] },
  { name: "Spain",       coords: [-3.7,  40.4] },
  { name: "Portugal",    coords: [-8.2,  39.6] },
  { name: "Italy",       coords: [12.8,  42.5] },
  { name: "Sweden",      coords: [17,    62.0] },
  { name: "Denmark",     coords: [10.5,  56.3] },
  { name: "Norway",      coords: [14,    65.0] },
  { name: "Poland",      coords: [20,    52.0] },
  { name: "Austria",     coords: [14.5,  47.5] },
  { name: "Switzerland", coords: [8.2,   46.8] },
  { name: "Czech Rep.",  coords: [15.5,  49.8] },
  { name: "Finland",     coords: [26,    64.5] },
  { name: "Iceland",     coords: [-19,   65.0] },
];

export default function MapChart() {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{ center: [15, 54], scale: 700 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = HIGHLIGHTED.has(String(geo.id));
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isHighlighted ? "#B8955A" : "#1C1A18",
                    fillOpacity: isHighlighted ? 0.75 : 1,
                    stroke: isHighlighted ? "#CCB074" : "#2A2724",
                    strokeWidth: 0.5,
                    outline: "none",
                    transition: "fill 0.2s",
                  },
                  hover: {
                    fill: isHighlighted ? "#CCB074" : "#242220",
                    fillOpacity: 1,
                    stroke: isHighlighted ? "#CCB074" : "#2A2724",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  pressed: {
                    fill: isHighlighted ? "#CCB074" : "#1C1A18",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>

      {LABELS.map(({ name, coords }) => (
        <Annotation
          key={name}
          subject={coords}
          dx={0}
          dy={0}
          connectorProps={{ stroke: "none", strokeWidth: 0 }}
        >
          <text
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              fill: "#ffffff",
              fillOpacity: 0.85,
              pointerEvents: "none",
            }}
          >
            {name}
          </text>
        </Annotation>
      ))}
    </ComposableMap>
  );
}
