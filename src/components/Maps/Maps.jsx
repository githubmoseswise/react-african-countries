import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import s from "./style.module.css";

function Maps({ lat, lon, name }) {
  useEffect(() => {
    // Initialise la carte
    const map = L.map("map").setView([lat, lon], 5);

    // Ajoute un fond de carte
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    // Ajouter un marqueur
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup(name)
      .openPopup();

    // Définir les coordonnées pour la surbrillance
    const bounds = [
      [lat , lon ], // Coordonnée sud-ouest
      [lat , lon ], // Coordonnée nord-est
    ];

    // Ajouter une surbrillance avec un polygone
    L.polygon(bounds, {
      color: 'red', // Couleur de la bordure
      weight: 2,    // Épaisseur de la bordure
      fillColor: 'red', // Couleur de remplissage
      fillOpacity: 0.2 // Opacité du remplissage
    }).addTo(map);

    // Nettoyage de la carte lorsque le composant est démonté
    return () => {
      map.remove();
    };
  }, [lat, lon, name]);

  return <div id="map" className={s.map}></div>;
}

export default Maps;
