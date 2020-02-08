import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-grid-system'

const Title = styled.h3({
  background: 'white',
  padding: '0 10px',
  display: 'inline-block',
  position: 'absolute',
  top: -33
})

export default ({
  children,
  title
}) => {
  return (
    <Container
      component="aside"
      style={{
        border: '1px solid black',
        borderRadius: 5,
        marginBottom: '2rem',
        paddingBottom: '1.5rem'
      }}>
      <Title>
        {title}
      </Title>
      {children}
    </Container>
  )
}