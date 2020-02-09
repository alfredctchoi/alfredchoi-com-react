import React from 'react'
import styled from 'styled-components'

import Aside from './aside'

const Degree = styled.div({
  lineHeight: '1.2rem'
})

export default () => {
  return (
    <Aside title="Education">
      <h4>
        Ryerson University (2008)
      </h4>
      <Degree>
        Bachelors of Technology,<br />
        Graphic Communications Management
      </Degree>
    </Aside>
  )
}