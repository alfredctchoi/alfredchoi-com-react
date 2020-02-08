import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-grid-system'
import styled from 'styled-components'

import { UnstyledList, InlineListItem } from './containers'

const NavContainer = styled.nav({
  borderBottom: '1px solid black',
  paddingTop: 15,
  paddingBottom: 15
})

const activeStyle = {
  textDecoration: 'underline'
}

export default () => {
  return (
    <NavContainer>
      <Container>
        <UnstyledList>
          <InlineListItem>
            <strong>Navigation |</strong>
          </InlineListItem>
          <InlineListItem>
            <NavLink exact activeStyle={activeStyle} to="/">Home</NavLink>
          </InlineListItem>
          <InlineListItem>
            <NavLink activeStyle={activeStyle} to="/projects">Projects</NavLink>
          </InlineListItem>
          <InlineListItem>
            <NavLink activeStyle={activeStyle} to="/resume">Resume</NavLink>
          </InlineListItem>
        </UnstyledList>
      </Container>
    </NavContainer>
  )
}