import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Particles from 'react-particles-js'
import particlesConfig from '../config/particlesjs-config.json'

import Header from './header'


import './layout.css'


const SiteWrapper = s('div')`
margin: 0 auto;
maxWidth: 960px;
`

const ParticlesFixed = s(Particles)`
position: fixed;
top: 0;
`

const particleParams = {
  particles: {
    color: '#000'
  }
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <SiteWrapper>
        <ParticlesFixed width="100vw" height="350px" params={particlesConfig}/>
          {children}
        </SiteWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
