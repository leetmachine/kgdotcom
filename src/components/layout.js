import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Header from './header'
import HeroBG from './Hero'

import './layout.css'


const SiteWrapper = s('div')`
margin: 0 auto;
maxWidth: 960px;
`
const TextHero = s('div')`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
height: 300px;
width: 100%;
`

const H3 = s('h3')`
display: inline
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <HeroBG />
        
        <SiteWrapper>
        <TextHero>
          <>
            <H3>
              Turning your
            </H3>
            <H3 className="doodleFont"> &nbsp; DOODLES</H3>
            <H3>, into your website.</H3>
          </>
        </TextHero>
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
