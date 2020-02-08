import React from 'react'
import styled from 'styled-components'

import { CenteredTextContainer } from './containers'

const HorizontalRule = styled.hr(({ vertical }) => ({
  height: 1,
  border: 0,
  borderTop: '2px dotted #ccc',
  margin: vertical ? `${vertical}px 0` : '1em 0',
  padding: 0,
  width: '50%',
  display: 'inline-block',
}))

const Hairline = ({
  vertical
}) => {
  return (
    <CenteredTextContainer>
      <HorizontalRule vertical={vertical} />
    </CenteredTextContainer>
  )
}

export default Hairline
