import styled from 'styled-components'
import { Row } from 'react-grid-system'

const addMarginFunction = ({
  vertical,
  horizontal
}) => {
  const style = {}
  if (vertical) {
    style.marginTop = vertical
    style.marginBottom = vertical
  }

  if (horizontal) {
    style.marginLeft = horizontal
    style.marginRight = horizontal
  }

  return style
}

export const CenteredTextContainer = styled.div({
  textAlign: 'center'
})

export const MarginContainer = styled.div(addMarginFunction)

export const MarginRow = styled(Row)(addMarginFunction)

export const UnstyledList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0
})

export const InlineListItem = styled.li({
  display: 'inline',
  marginLeft: 5,
  marginRight: 5
})
