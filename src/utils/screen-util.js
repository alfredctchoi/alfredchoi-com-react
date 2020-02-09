// import React from 'react'

import { useScreenClass } from 'react-grid-system'

export const isMobileViewport = (screenClass) => ['xs', 'sm'].includes(screenClass)

export const RenderMobile = ({ children }) => {
  const screenClass = useScreenClass()
  const isMobile = isMobileViewport(screenClass)
  return isMobile ? children : null
}

export const RenderDesktop = ({ children }) => {
  const screenClass = useScreenClass()
  const isMobile = isMobileViewport(screenClass)
  return !isMobile ? children : null
}