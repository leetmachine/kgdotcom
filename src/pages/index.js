import React from 'react'
import { Link } from 'gatsby'
import s from 'styled-components'

import Layout from '../components/layout'
import ProfilePic from '../components/ProfilePic'

const Container = s('div')`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

const PicWrapper = s('div')`
width: 250px;
height: auto;
border-radius: 200px;
margin-top: -125px;
`

const Section = s('section')`
margin: 0 auto;
height: 100vh;
width: 100%;
background: white;
position: relative;
top: 300px;
`

const IndexPage = () => (
  <Layout>
    <Section>
      <Container id="container">
        <PicWrapper>
          <ProfilePic />
        </PicWrapper>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
