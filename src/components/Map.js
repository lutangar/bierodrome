import * as React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import breweriesFeatureCollection from '../data/breweriesFeatureCollection.json';
import BreweryMarker from './BreweryMarker';

const Map = ({ style }) => {
  if (typeof window !== 'undefined') {
    return (
      <MapContainer style={style} center={[44.727215, 5.021424]} zoom={10}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          center={[44.725028, 5.015259]}
        />
        {breweriesFeatureCollection.features.map((feature) => (
          <BreweryMarker key={feature.properties.name} feature={feature} />
        ))}
      </MapContainer>
    );
  }
  return null;
};
export default Map;
