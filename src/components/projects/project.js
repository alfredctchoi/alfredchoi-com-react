import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import { Link } from 'react-router-dom'

import { CenteredTextContainer, ImageWithShadow } from '../containers'
import { Paragraph } from '../text-elements'

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