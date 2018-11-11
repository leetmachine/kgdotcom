import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import Layout from '../components/layout'

import MessengerDoodle from '../images/messengerDoodles.png'

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
  max-width: 800px;
  padding: 20px;
  text-align: justify;
`

const ContactPage = () => (
  <Layout>
    <Container>
      <Block>
        <h3 style={{textAlign: "center", marginBottom: "20px"}}>Contact me today to see how I can help.</h3>
        <Form name="contact"
          method="POST"
          data-netlify="true"
          action="/success" className="form">
            <Col>
                <FormGroup>
                    <Label>Your Name:</Label>
                    <Input type="text" name="name"/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label>Your Email:</Label>
                    <Input type="email" name="email"/>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label>Message:</Label>
                    <Input type="textarea" name="message"/>
                </FormGroup>
            </Col>
            <Col>
            <Button type="submit">Send it off!</Button>
            </Col>
        </Form>
        <img src={MessengerDoodle} width="80%" style={{margin: "0 auto"}} />
      </Block>
    </Container>
  </Layout>
)

export default ContactPage
