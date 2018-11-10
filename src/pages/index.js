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
width: 150px;
height: auto;
border-radius: 150px;
margin-top: -75px;
margin-bottom: 20px;
`



const IndexPage = () => (
  <Layout>
      <Container>
        <PicWrapper>
          <ProfilePic/>
        </PicWrapper>

        <span>lorem</span>
      </Container>
  </Layout>
)

export default IndexPage
