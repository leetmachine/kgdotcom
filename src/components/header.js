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
display: flex;
align-items: space-between;
justify-content: space-between;
padding: 10px;
`

const NavLink = styled(Link)`
color: white;
font-weight: 700;
`

const Header = ({ siteTitle }) => (
  <Container>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/tech">TECH</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
  </Container>
)

export default Header
