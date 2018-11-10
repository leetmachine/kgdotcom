import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

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

const ContactPage = () => (
  <Layout>
    <Container>
        <Block>
      <h3>Contact me today to see how I can help.</h3>
      <form name="contact" method="POST" netlify action="/success">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </Block>
    </Container>
  </Layout>
)

export default ContactPage
