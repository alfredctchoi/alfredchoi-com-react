import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-grid-system'
import styled from 'styled-components'

import { UnstyledList, MarginContainer, InlineListItem } from './containers'

const NavContainer = styled.div({
  borderBottom: '1px solid black',
  paddingTop: 15,
  paddingBottom: 15
})

export default () => {
  return (
    <NavContainer>
      <Container>
        <UnstyledList>
          <InlineListItem>
            <strong>Navigation |</strong>
          </InlineListItem>
          <InlineListItem>
            <Link to="/">
              Home
                </Link>
          </InlineListItem>
          <InlineListItem>
            <Link to="/projects">
              Projects
                </Link>
          </InlineListItem>
          <InlineListItem>
            <Link to="/resume">
              Resume
                </Link>
          </InlineListItem>
        </UnstyledList>
      </Container>
    </NavContainer>
  )
}