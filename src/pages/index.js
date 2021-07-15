import * as React from "react"
import { css } from '@emotion/react'
import breweriesFeatureCollection from '../data/breweriesFeatureCollection.json'
import githubLogo from '../images/GitHub-Mark-32px.png';
import Map from "../components/Map";

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
  color: "#ffca28",
}

const mainStyle = css`
  display: flex;
  flex: 1;
`

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

const titleStyle = {
  color: "#c79a00",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const linkStyle = {
  color: "#ffca28",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const mapStyle = {
  width: '80%',
  height: '800px'
}

const IndexPage = () => {
  return (
    <div style={pageStyles}>
      <title>La bièrodrôme</title>
      <h1 style={headingStyles}>
        La bièrodrôme
        <br />
        <span style={headingAccentStyles}>— Circuit de dégustation de bières des micro-brasseries de la Drôme... à vélo! </span>
        <span role="img" aria-label="Party popper emojis">
          🍺🚲
        </span>
      </h1>
      <main css={mainStyle}>
        <Map style={mapStyle}/>
        <ul style={listStyles}>
          {breweriesFeatureCollection.features.map(({ properties }) => (
            <li key={`brewery-menu-item-${properties.name}`} style={{ ...listItemStyles, color: 'goldenrod' }}>
              <span>
                <h3
                  style={titleStyle}
                >
                  {properties.name}
                </h3>
                <p style={descriptionStyle}>{properties?.streetAddress} <br/>{properties?.postalCode} {properties?.addressLocality} <br/>
                   <a
                       style={linkStyle}
                       href={`${properties?.website}`}
                   >
                  {properties.website}
                </a>
                </p>
              </span>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <a style={linkStyle} href="https://github.com/lutangar/bierodrome">
          CC-BY-4.0
          <img
              alt="Github logo"
              src={githubLogo}
          />
        </a>
        2021
      </footer>
    </div>
  )
}

export default IndexPage
