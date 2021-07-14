import * as React from "react"

import breweriesFeatureCollection from '../data/breweriesFeatureCollection.json'
import githubLogo from '../images/GitHub-Mark-32px.png';
import Map from "../components/Map";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 375,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  width: '20%',
  marginBottom: 96,
  paddingLeft: 40,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const mapStyle = {
  width: '80%',
  height: '800px'
}

// data
const links = [
    ...breweriesFeatureCollection.features.map(feature => ({
      text: feature.properties.name,
      url: feature.properties.website,
      description: `${feature?.properties?.streetAddress} ${feature?.properties?.postalCode} ${feature?.properties?.addressLocality}`,
      color: "#E95800",
    })),
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>La bièrodrôme</title>
      <h1 style={headingStyles}>
        La bièrodrôme
        <br />
        <span style={headingAccentStyles}>— Circuit de dégustation de bières des micro-brasseries de la Drôme... à vélo! </span>
        <span role="img" aria-label="Party popper emojis">
          🍺🚲
        </span>
      </h1>
      <div style={{ display: 'flex' }}>
        <Map style={mapStyle}/>
        <ul style={listStyles}>
          {links.map((link, i) => (
            <li key={`brew_${i}_${link.url}`} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <a href="https://github.com/lutangar/bierodrome">
          CC-BY-4.0
          <img
              alt="Github logo"
              src={githubLogo}
          />
        </a>
        2021
      </footer>
    </main>
  )
}

export default IndexPage
