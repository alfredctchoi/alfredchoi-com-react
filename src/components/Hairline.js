import React from 'react'
import styled from 'styled-components'

import { CenteredTextContainer } from './Containers'

const HorizontalRule = styled.hr({
  height: 1,
  border: 0,
  borderTop: '2px dotted #ccc',
  margin: '1em 0; padding: 0',
  width: '50%',
  display: 'inline-block',

})

const Hairline = () => {
  return (
    <CenteredTextContainer>
      <HorizontalRule />
    </CenteredTextContainer>
  )
}

export default Hairline
