import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import Lightbulb from '../images/lightbulb.png'

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
  text-align: center;
`

const Heading = styled('h1')`
  text-align: center;
  margin: 10px;
  marginBottom: .8125rem;
  padding: 0;
`

const SuccessPage = () => (
  <Layout>
    <Container>
        <Block>
          <Heading>Woot!</Heading>
          <p>At the speed of light your idea blasts off to my inbox!</p>
          <img src={Lightbulb} width="80%" style={{marginBottom: "50px"}}/>
        </Block>
    </Container>
  </Layout>
)

export default SuccessPage
