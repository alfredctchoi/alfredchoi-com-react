import React from 'react'
import { Container, Col, Row } from 'react-grid-system'
import styled from 'styled-components'

const DisplayHeading = styled.p({
  fontSize: '2.75rem'
})

const Home = () => {
  return (
    <div>
      <Container style={{ marginTop: 25 }} component="section">
        <Row>
          <Col xs={12} md={9}>
            <DisplayHeading>
              Technical Lead at TELUS Digital working with NodeJS {'&'} React to  transform a 100 year old telecommunications company.
            </DisplayHeading>
            <DisplayHeading>
              Building software to drive customer and business efficiencies is my passion.
        </DisplayHeading>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
