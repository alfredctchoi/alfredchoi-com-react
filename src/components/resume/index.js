import React from 'react';

import { Container, Row, Col } from 'react-grid-system'
import WorkExperience from './work-experience'
import Skills from './skills'
import Education from './education'

function App() {
  return (
    <Container component="section">
      <Row>
        <Col xs={12} md={8}>
          <WorkExperience />
        </Col>
        <Col xs={12} md={4}>
          <Skills />
          <Education />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
