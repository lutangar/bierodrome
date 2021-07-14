import * as React from "react";
import {Marker, Popup} from "react-leaflet";

const BreweryMarker = ({ feature }) => {
    return (
        <Marker position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]}>
            <Popup>
                <b>{feature?.properties?.name}</b><br />
                {feature?.properties?.streetAddress}<br />
                {feature?.properties?.postalCode} {feature?.properties?.addressLocality}
                {feature?.properties?.website && <><br /><a href="${feature?.properties?.website}" target="_blank">{feature?.properties?.website.replace(/^https?:\/\//, '')}</a></>}
            </Popup>
        </Marker>
    )
}

export default BreweryMarker;
