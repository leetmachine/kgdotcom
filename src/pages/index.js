import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'

import Layout from '../components/layout'
import ProfilePic from '../components/ProfilePic'

const Container = s('div')`
display: flex;
flex-direction: column;
align-items: center;
`

const PicWrapper = s('div')`
width: 200px;
height: auto;
border-radius: 200px;
margin-top: -100px;
margin-bottom: 20px;
`

const Section = s('section')`
margin: 0 auto;
height: 100vh;
width: 100vw;
position: relative;
top: 300px;
background: white;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
`

const IndexPage = () => (
  <Layout>
    <Section>
      <Container>
        <PicWrapper>
          <ProfilePic/>
        </PicWrapper>

        <span>lorem</span>
        <h4>contact me today to get your ideas off the napkin and onto the web.</h4>

      </Container>
    </Section>
  </Layout>
)

export default IndexPage
