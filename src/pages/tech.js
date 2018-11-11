import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GoogleFont } from 'react-typography'

import Layout from '../components/layout'
import ProfilePic from '../components/ProfilePic'

import ReactLogo from '../images/reactLogo.svg'
import GQLLogo from '../images/GraphQL_Logo.png'
import AWSLogo from '../images/awslogo.png'
import GatsbyLogo from '../images/gatsbylogo.png'
import NodeLogo from '../images/nodejslogo.png'
import MysqlLogo from '../images/mysqllogo.png'

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

const Heading = styled('h1')`
  text-align: center;
  margin: 10px;
  marginBottom: .8125rem;
  padding: 0;
`

const ItemContainer = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;

`

const List = styled('div')`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-width: 300px;
    max-width: 450px;
    justify-content: space-between;
    align-items: baseline;
    margin: 0 auto;
    margin-top: 30px;
`

const TechPage = () => (
  <Layout>
      <Container>
        <Block>
            <Heading>Latest and Greatest</Heading>
            <p style={{textAlign: "center"}}>I use the latest and greatest tech from teams like Facebook and Amazon to build high quality websites for the future. Things like:</p>
            <List>
                    <ItemContainer>
                        <img src={ReactLogo} width="100px" style={{margin: 0, marginBottom: '10px'}}/>
                        <h3 style={{margin: 0}}>React</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={GQLLogo} width="100px" style={{margin: 0, marginBottom: '10px'}}/>
                        <h3 style={{margin: 0}}>GraphQL</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={AWSLogo} width="100px" style={{margin: 0, marginBottom: '10px'}}/>
                        <h3 style={{margin: 0}}>AWS</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={GatsbyLogo} width="100px" style={{margin: 0, marginBottom: '10px'}}/>
                        <h3 style={{margin: 0}}>Gatsby</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={NodeLogo} width="100px" style={{margin: 0, marginBottom: '10px'}}/>
                        <h3 style={{margin: 0}}>NodeJS</h3>
                    </ItemContainer>
                    <ItemContainer>
                        <img src={MysqlLogo} width="100px" style={{margin: 0, marginBottom: '10px'}}/>
                        <h3 style={{margin: 0}}>MySql</h3>
                    </ItemContainer>
            </List>
        </Block>
     </Container>
  </Layout>
)

export default TechPage
