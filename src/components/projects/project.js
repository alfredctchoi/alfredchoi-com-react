import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-grid-system'
import { Link } from 'react-router-dom'

import { CenteredTextContainer } from '../containers'
import Hairline from '../hairline'

const ImageWithShadow = styled.img(({ showShadow }) => {
  return {
    boxShadow: showShadow && '5px 5px 3px rgba(0,0,0,0.2)'
  }
})

const Paragraph = styled.p({
  marginTop: '2rem',
  marginBottom: '2rem',
  fontSize: '1.2rem',
  lineHeight: '2.5rem'
})

const Project = ({
  description,
  title,
  image,
  includeShadow,
  link
}) => {
  return (
    <Container component="article">
      <CenteredTextContainer>
        <h3>{title}</h3>
      </CenteredTextContainer>
      <Row>
        <Col xs={12} md={8} offset={{ md: 2 }}>
          <CenteredTextContainer>
            <ImageWithShadow
              showShadow={includeShadow}
              style={{ width: '100%' }}
              src={image}
              alt={title}
            />
          </CenteredTextContainer>
          <Paragraph>
            {description}{'  '}
            <Link to={link}>Read more ></Link>
          </Paragraph>
        </Col>
      </Row>
    </Container >
  )
}

export default Project