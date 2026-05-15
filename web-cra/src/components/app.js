import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import { useScreenClass } from 'react-grid-system'

import Header from './header'
import Home from './home'
import ProjectDetail from './projects/project-details'
import Resume from './resume'
import Projects from './projects'
import Nav from './nav'
import { MarginContainer } from './containers'
import { isMobileViewport } from '../utils/screen-util'

/**
 * Scroll to top when page changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Top level application component that sets the layout of the page and routing
const App = () => {
  const screenClass = useScreenClass()
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Nav />
      <MarginContainer vertical={isMobileViewport(screenClass) ? 30 : 50}>
        <Switch>
          <Route path="/projects/:id">
            <ProjectDetail />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </MarginContainer>
    </Router>
  )
}

export default App
