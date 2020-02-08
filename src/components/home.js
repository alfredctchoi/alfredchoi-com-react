import React, { Fragment } from 'react'
import { Container, Col, Row, ScreenClassRender } from 'react-grid-system'
import styled from 'styled-components'

import { isMobileViewport } from '../utils/screen-util'

const DisplayHeading = styled.p(({ screenClass }) => {
  return {
    fontSize: isMobileViewport(screenClass) ? '2rem' : '2.75rem'
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
                <DisplayHeading screenClass={screenClass}>
                  Technical Lead at TELUS Digital working with NodeJS {'&'} React to  transform a 100 year old telecommunications company.
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
