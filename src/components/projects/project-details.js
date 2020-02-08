import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-grid-system'

import TelusPom from './telus-pom'
import TelusUsage from './telus-usage'
import TelusNav from './telus-nav'

const map = {
  'telus-pom': TelusPom,
  'telus-usage': TelusUsage,
  'telus-nav': TelusNav
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