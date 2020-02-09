import React, { Fragment } from 'react'

import projects from '../../projects'
import Project from './project'
import Hairline from '../hairline'

const Projects = () => {
  return <div>
    {
      projects.map((project) => {
        return <Fragment key={project.title}>
          <Project {...project} />
          <Hairline />
        </Fragment>
      })
    }
  </div>
}

export default Projects
