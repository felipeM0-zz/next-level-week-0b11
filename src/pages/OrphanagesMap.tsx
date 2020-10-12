import React from "react";
import { Link } from "react-router-dom";
import mapMarkerImg from "../images/map-marker.svg";
import { FiPlus } from "react-icons/fi";

import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanages-map.css";

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas crianças estão esperado a sua visita</p>
        </header>

        <footer>
          <strong>São Luís</strong>
          <span>Maranhão</span>
        </footer>
      </aside>

      <Map
        center={[-2.5214101, -44.2107223]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
