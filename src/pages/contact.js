import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

const FormRow = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: start;
`

const Form = styled('form')`
  width: 100%;
  min-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FormInput = styled('input')`
  margin-left: 20px;
  width: 250px;
`
const FormTextArea = styled('textarea')`
  margin-left: 20px;
  width: 250px;
`

const ContactPage = () => (
  <Layout>
    <Container>
      <Block>
        <h3 style={{textAlign: "center"}}>Contact me today to see how I can help.</h3>

        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormRow>
            <p>Your Name:</p>
            <FormInput type="text" name="name" />
          </FormRow>
          <FormRow>
            <p>Your Email:</p>
            <FormInput type="email" name="email" />
          </FormRow>
          <FormRow>
              <p>Message:</p>
              <FormTextArea name="message"/>
          </FormRow>
          <FormRow>
            <button type="submit">Send</button>
          </FormRow>
        </Form>

        <img src={MessengerDoodle} width="80%" />
      </Block>
    </Container>
  </Layout>
)

export default ContactPage
