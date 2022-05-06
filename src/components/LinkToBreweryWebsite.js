import * as React from "react";

const LinkToBreweryWebsite = ({ website }) => (
    <a href={website} target="_blank">{website.replace(/^https?:\/\//, '')}</a>
);

export default LinkToBreweryWebsite;
