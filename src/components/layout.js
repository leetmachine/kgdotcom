import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import s from 'styled-components'

import Header from './header'
import HeroBG from './Hero'
import TextHero from './Hero/TextHero'
import ProfilePic from './ProfilePic'

// import './layout.css'


const SiteWrapper = s('div')`
margin: 0 auto;
`

const Section = s('section')`
margin: 0 auto;
width: 100vw;
position: relative;
top: 325px;
display: flex;
align-items: center;
flex-direction: column;
background: white;
border-top: 3px solid #EFC93E;
`

const PicWrapper = s('div')`
width: 150px;
height: auto;
border-radius: 150px;
margin-top: -75px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;
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
        </Helmet>
        <Header />
        <TextHero />
        <HeroBG />
        <SiteWrapper>
          <Section>
            <PicWrapper>
              <ProfilePic/>
            </PicWrapper>
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
