function initCyberMap() {
  const userPos = { lat: 3.4516, lng: -76.5320 }; 

  // 1. Inicializar Mapa con el tema importado
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: userPos,
    styles: cyberpunkMapStyle,
    disableDefaultUI: true,
    zoomControl: true
  });

  // 2. Definición y renderizado de Puntos de Interés (POIs)
  const pointsOfInterest = [
    { pos: { lat: 3.4530, lng: -76.5310 }, icon: "fa-solid fa-gas-pump", color: "--neon-yellow", title: "GASOLINERA_01" },
    { pos: { lat: 3.4490, lng: -76.5340 }, icon: "fa-solid fa-motorcycle", color: "--neon-cyan", title: "TALLER_CYBERMOTO" },
    { pos: { lat: 3.4550, lng: -76.5290 }, icon: "fa-solid fa-warehouse", color: "--neon-magenta", title: "BODEGA_CENTRAL" },
    { pos: { lat: 3.4480, lng: -76.5280 }, icon: "fa-solid fa-utensils", color: "--neon-cyan", title: "RESTAURANTE_NET" }
  ];

  pointsOfInterest.forEach(poi => {
    // Usar la fábrica de marcadores
    const markerElement = createCyberMarker(poi.icon, poi.color);
    
    // Si estás usando la API nativa de Google Maps v3.56+:
    // new google.maps.marker.AdvancedMarkerElement({
    //   map: map,
    //   position: poi.pos,
    //   content: markerElement,
    //   title: poi.title
    // });
  });

  // 3. Trazado de Ruta Neón (Polyline)
  const routeCoordinates = [
    { lat: 3.4516, lng: -76.5320 },
    { lat: 3.4530, lng: -76.5310 },
    { lat: 3.4550, lng: -76.5290 }
  ];

  new google.maps.Polyline({
    path: routeCoordinates,
    geodesic: true,
    strokeColor: "#ff0055",
    strokeOpacity: 0.4,
    strokeWeight: 10,
    map: map
  });

  new google.maps.Polyline({
    path: routeCoordinates,
    geodesic: true,
    strokeColor: "#ffffff",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map
  });
}