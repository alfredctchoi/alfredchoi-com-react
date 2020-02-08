import React from 'react'
import { Container } from 'react-grid-system'

import Header from './Header'
import Project from './Project'
import projects from '../../projects'

const Home = () => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: 75 }} component="section">
        {
          projects.map((project) => {
            return <Project key={project.title} {...project} />
          })
        }
      </Container>
    </div>
  )
}

export default Home
