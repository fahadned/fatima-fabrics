"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HIGHLIGHTED_COUNTRIES: Record<string, string> = {
  "826": "United Kingdom",
  "372": "Ireland",
  "276": "Germany",
  "250": "France",
  "528": "Netherlands",
  "56":  "Belgium",
  "724": "Spain",
  "620": "Portugal",
  "380": "Italy",
  "752": "Sweden",
  "208": "Denmark",
  "578": "Norway",
  "616": "Poland",
  "40":  "Austria",
  "756": "Switzerland",
  "203": "Czech Republic",
  "246": "Finland",
};

export default function MapChart() {
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const show = useCallback(
    (name: string, e: React.MouseEvent | React.TouchEvent) => {
      const point =
        "touches" in e ? e.changedTouches[0] : (e as React.MouseEvent);
      const rect = (
        e.currentTarget.closest("svg") as SVGSVGElement
      ).getBoundingClientRect();
      setTooltip({
        name,
        x: point.clientX - rect.left,
        y: point.clientY - rect.top,
      });
    },
    [],
  );

  const hide = useCallback(() => setTooltip(null), []);

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      {...(!canHover ? { onClick: hide } : {})}
    >
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ center: [15, 54], scale: 700 }}
        width={800}
        height={600}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = String(geo.id);
              const name = HIGHLIGHTED_COUNTRIES[id];

              if (!name) {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#1C1A18",
                        stroke: "#2A2724",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: "default",
                      },
                      hover: {
                        fill: "#1C1A18",
                        stroke: "#2A2724",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: "default",
                      },
                      pressed: {
                        fill: "#1C1A18",
                        stroke: "#2A2724",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: "default",
                      },
                    }}
                    tabIndex={-1}
                  />
                );
              }

              const handlers: Record<string, (e: any) => void> = {};
              if (canHover) {
                handlers.onMouseEnter = (e: React.MouseEvent) => show(name, e);
                handlers.onMouseLeave = hide;
              } else {
                handlers.onClick = (e: React.MouseEvent) => {
                  e.stopPropagation();
                  show(name, e);
                };
              }

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#B8955A",
                      fillOpacity: 0.75,
                      stroke: "#2A2724",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer",
                      transition: "fill 0.2s",
                    },
                    hover: {
                      fill: "#CCB074",
                      fillOpacity: 1,
                      stroke: "#CCB074",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "#CCB074",
                      fillOpacity: 1,
                      stroke: "#CCB074",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer",
                    },
                  }}
                  {...handlers}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x,
            top: tooltip.y - 40,
            transform: "translateX(-50%)",
            background: "rgba(10, 9, 8, 0.95)",
            border: "1px solid #B8955A",
            color: "#EDE8E0",
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: 18,
            letterSpacing: "0.04em",
            padding: "8px 14px",
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}
