import React from 'react'

import projects from '../../projects'
import Project from './project'

const Projects = () => {
  return <div>
    {
      projects.map((project) => {
        return <Project key={project.title} {...project} />
      })
    }
  </div>
}

export default Projects
