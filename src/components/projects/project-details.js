import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-grid-system'

import TelusPom from './telus-pom'

const map = {
  'telus-pom': TelusPom
}

const ProjectDetail = (props) => {
  const { id } = useParams()
  const RenderComponent = map[id]
  return (
    <Container>
      <RenderComponent />
    </Container>
  )
}

export default ProjectDetail