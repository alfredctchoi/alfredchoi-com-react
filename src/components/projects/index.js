import React, { Fragment } from 'react'

import projects from '../../projects'
import Project from './project'
import Hairline from '../hairline'
import { RenderMobile } from '../../utils/screen-util'

const Projects = () => {
  return <div>
    {
      projects.map((project) => {
        return <Fragment key={project.title}>
          <Project {...project} />
          <RenderMobile>
            <Hairline />
          </RenderMobile>
        </Fragment>
      })
    }
  </div>
}

export default Projects
