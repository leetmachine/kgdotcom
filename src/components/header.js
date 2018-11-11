import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled('div')`
background-color: #efca3f;
margin-bottom: 1.45rem;
min-height: 30px;
width: 100vw;
position: fixed;
top: 0;
z-index: 100;
padding: 10px;
box-shadow: 0px 2px 2px 0px rgba(0,0,0,.3);
`

const FlexBox = styled('div')`
display: flex;
align-items: space-between;
justify-content: space-between;
max-width: 80%;
margin: 0 auto;
`

const NavLink = styled(Link)`
color: white;
font-weight: 700;
`

const Header = ({ siteTitle }) => (
  <Container>
    <FlexBox>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/tech">TECH</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
    </FlexBox>
  </Container>
)

export default Header
