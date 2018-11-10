import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Header from './header'
import HeroBG from './Hero'
import TextHero from './Hero/TextHero'

import './layout.css'


const SiteWrapper = s('div')`
margin: 0 auto;
maxWidth: 960px;
`

const Section = s('section')`
margin: 0 auto;
height: 100vh;
width: 100vw;
position: relative;
top: 300px;
background: white;
border-top: 3px solid #EFC93E;
box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.3);
`

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
          <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet"></link>
        </Helmet>
        <HeroBG />
        <TextHero />
        <SiteWrapper>
          <Section>
            {children}
          </Section>
        </SiteWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
