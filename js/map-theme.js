// Configuración de la capa base con estética Ciberpunk
const cyberpunkMapStyle = [
  { elementType: "geometry", stylers: [{ color: "#030308" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#030308" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#00f3ff" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f9f002" }]
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }] // Oculta POIs nativos de Google
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#101025" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#00f3ff" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#200020" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#ff0055" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000814" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#151530" }]
  }
];