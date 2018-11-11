import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Hidden } from '../config/styleVars'

import './css/index.css'


import Layout from '../components/layout'

import MarketingDoodle from '../images/marketingDoodles.png'
import RocketDoodle from '../images/rocketshipDoodle.png'
import GearsDoodle from '../images/gearsDoodle.png'


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
  max-width: 700px;
  padding: 20px;
  text-align: justify;
`

const Heading = styled('h1')`
  text-align: center;
  margin: 10px;
  margin-bottom: 0.8125rem;
  padding: 0;
`

const ListContainer = styled('div')`
  display: flex;
  justify-content: center;
`

const List = styled('div')`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width:80%;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <Block>
        <p>
          We've all been there, the perfect idea pops into our head and we reach
          for the closest parchment-like item we can find- a napkin, a
          tablecloth, your friend's arm. We feaverishly jot it down in hopes of
          solidifying it to the universe as our own, awesome idea. Sometimes
          they really are that great, sometimes they're not.
        </p>
      </Block>
      <Heading>I'm here to help with the great ones.</Heading>
      <List>
        <img src={MarketingDoodle} width="100px" style={{Hidden}} />
        <img src={RocketDoodle} width="100px" />
        <img className="hiddenOnSmall" src={GearsDoodle} width="100px" />
      </List>

      <Block>
        <p>
          I'm Keegan and I like to build web applications. I make things as easy
          as possible for my clients by offering complete solutions that take
          your project from concept to deployment. From marketing websites to
          fullblown software solutions, I'll help you through the process of idea generation, solution architecture, and implementation. I use the latest
          technology from teams like Facebook and Amazon to build blazing-fast,
          beautiful websites to maximize your investment and truly create value. 
        </p>
        <ul />
      </Block>
      <Heading>Specialists do it right.</Heading>
      <Block>
        <p>
          I believe in specialization and software development is mine. I work
          with a team as needed to get the job done. I've created a network of
          writers, designers, photographers, videographers, marketers, you name
          it! Whatever we need to get your project to the highest level, we'll
          have the specialist we need and trust.
        </p>
      </Block>
    </Container>
  </Layout>
)

export default IndexPage
