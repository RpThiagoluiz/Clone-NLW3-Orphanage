import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
//icon
import { FiPlus } from "react-icons/fi";
//img
import mapMarkerImg from "../assets/img/MapMarker.svg";
//styles
import "../assets/styles/pages/orphanages-map.css";
import "leaflet/dist/leaflet.css";

const OrphanagesMap = () => (
  <div id="page-map">
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :) </p>
      </header>
      <footer>
        <strong>Goiânia</strong>
        <span>GO</span>
      </footer>
    </aside>
    <MapContainer
      center={[-16.7233712, -49.3376473]}
      zoom={13}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </MapContainer>
    <Link to="" className="create-orphanage">
      <FiPlus size={32} color="#FFF" />
    </Link>
  </div>
);
export default OrphanagesMap;
