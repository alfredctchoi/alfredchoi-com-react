import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-grid-system'
import styled from 'styled-components'

import { hideOnPrint } from '../utils/styles'

const NavContainer = styled.section({
  borderBottom: '1px solid #ddd',
  borderTop: '1px solid #ddd',
  paddingTop: 15,
  paddingBottom: 15,
  ...hideOnPrint
})

const activeStyle = {
  textDecoration: 'underline'
}

const WrappedNavLink = styled(NavLink)({
  marginRight: 16
})

const Nav = () => {
  return (
    <NavContainer>
      <Container>
        <nav style={{
          display: 'flex'
        }}>
          <WrappedNavLink exact activeStyle={activeStyle} to="/">Home</WrappedNavLink>
          <WrappedNavLink activeStyle={activeStyle} to="/projects">Projects</WrappedNavLink>
          <WrappedNavLink activeStyle={activeStyle} to="/resume">Resume</WrappedNavLink>
        </nav>
      </Container>
    </NavContainer>
  )
}

export default Nav