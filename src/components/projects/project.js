import React from 'react'
import { Row, Col, Container, useScreenClass } from 'react-grid-system'
import { Link } from 'react-router-dom'

import { ImageWithShadow } from '../containers'
import { RenderMobile, RenderDesktop, isMobileViewport } from '../../utils/screen-util'

const Project = ({
  description,
  title,
  image,
  includeShadow,
  link
}) => {
  const screenClass = useScreenClass()
  const isMobile = isMobileViewport(screenClass)
  return (
    <article style={{ padding: isMobile ? 0 : '30px 0' }}>
      <Container>
        <Row>
          <RenderMobile>
            <Col xs={12} md={0}>
              <h2>{title}</h2>
            </Col>
          </RenderMobile>
          <Col xs={12} md={4}>
            <ImageWithShadow
              showShadow={includeShadow}
              style={{ width: '100%' }}
              src={image}
              alt={title}
            />
          </Col>
          <Col xs={12} md={8}>
            <RenderDesktop>
              <h2>{title}</h2>
            </RenderDesktop>
            <p>{description}</p>
            <Link to={link}>Read more ></Link>
          </Col>
        </Row>
      </Container >
    </article>
  )
}

export default Project