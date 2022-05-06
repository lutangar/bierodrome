import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import LinkToBreweryWebsite from './LinkToBreweryWebsite';

const BreweryMarker = ({ feature }) => {
  return (
    <Marker position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}>
      <Popup>
        <b>{feature?.properties?.name}</b>
        <br />
        {feature?.properties?.streetAddress}
        <br />
        {feature?.properties?.postalCode} {feature?.properties?.addressLocality}
        {feature?.properties?.website && (
          <>
            <br />
            <LinkToBreweryWebsite website={feature?.properties?.website} />
          </>
        )}
      </Popup>
    </Marker>
  );
};

export default BreweryMarker;
