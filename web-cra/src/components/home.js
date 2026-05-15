import React, { Fragment } from 'react'
import { Container, Col, Row, ScreenClassRender } from 'react-grid-system'
import styled from 'styled-components'

import { isMobileViewport } from '../utils/screen-util'

const DisplayHeading = styled.p(({ screenClass }) => {
  const isMobile = isMobileViewport(screenClass)
  return {
    lineHeight: isMobile ? '2.75rem' : '4rem',
    fontSize: isMobile ? '2rem' : '3rem',
  }
})

const Home = () => {
  return (
    <Container component="section">
      <Row>
        <Col xs={12} md={9}>
          <ScreenClassRender render={(screenClass) => {
            return (
              <Fragment>
                <DisplayHeading
                  screenClass={screenClass}
                  style={{
                    marginTop: 0,
                    marginBottom: '3rem'
                  }}>
                  <strong>Front End Engineer II</strong> at Amazon Advertising working with <strong>React</strong> providing delightful user experiences for our customers.
                </DisplayHeading>
                <DisplayHeading screenClass={screenClass}>
                  Building software to drive customer and business efficiencies is my passion.
                </DisplayHeading>
              </Fragment>
            )
          }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
