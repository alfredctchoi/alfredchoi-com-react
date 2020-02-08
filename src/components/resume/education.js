import React from 'react'

import Aside from './aside'
import { Text } from '../text-elements'

export default () => {
  return (
    <Aside title="Education">
      <h4 style={{ marginBottom: 0 }}>
        Ryerson University (2008)
      </h4>
      <Text lineHeight={1}>
        Bachelors of Technology,<br />
        Graphic Communications Management
      </Text>
    </Aside>
  )
}