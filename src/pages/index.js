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


const IndexPage = () => (
  <Layout>
      <Container>
        <Block>
          <p>We've all been there, the perfect idea pops into our head and we reach for the closest parchment-related item we can find- a napkin, a tablecloth, your friends arm. We feaverishly jot it down in hopes of solidifying it to the universe as our own, awesome idea. Sometimes they really are that great, sometimes they're not.</p></Block>
          <h1 style={{textAlign: "center", margin: "0"}}>I'm here to help with the great ones.</h1>
        <Block>
          <p>I'm Keegan and I like to build web applications. I make things as easy as possible for my clients by offering complete solutions that take your project from start to finish. Ill do what I do best so you can focus on what matters, your business.</p>
        </Block>
        <Block>
          <p>I believe in specialization and software development is mine. I know what I do best and work with a team as needed to get the job done. I've created a network of Writers, Designers, Photographers, Videographers, Marketers, you name it! Whatever we need to get your project to the highest level, we'll have the specialist we need.</p>
        </Block>
     </Container>
  </Layout>
)

export default IndexPage
