import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GoogleFont } from 'react-typography'

import Layout from '../components/layout'
import ProfilePic from '../components/ProfilePic'

const Container = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
max-width: 960px;
padding-left: 20px;
padding-right: 20px;
margin: 0 auto;
`

const Block = styled('div')`
margin: 0 auto;
max-width: 600px;
padding: 20px;
text-align: justify;
`

const AboutPage = () => (
  <Layout>
      <Container>
     </Container>
  </Layout>
)

export default AboutPage
