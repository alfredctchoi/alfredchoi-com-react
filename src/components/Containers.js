/**
 * This file contains reusable containers for different parts of the application
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Hidden } from 'react-grid-system'

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

export const StyledUnorderedList = styled.ul({
  margin: 0
})

export const InlineListItem = styled.li({
  display: 'inline',
  marginLeft: 5,
  marginRight: 5
})

export const ImageWithShadow = styled.img(({ showShadow = true }) => {
  return {
    boxShadow: showShadow && '5px 5px 5px rgba(0,0,0,0.2)'
  }
})

export const VerticalCenterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

export const VerticalBaselineContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline'
})

export const HideForMdAndAbove = ({ children }) => (
  <Hidden md={true} lg={true} xl={true}>
    {children}
  </Hidden>
)

HideForMdAndAbove.propTypes = {
  children: PropTypes.node.isRequired
}