import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header'
import Home from './home'
import ProjectDetail from './projects/project-details'
import Resume from './resume'
import Projects from './projects'
import Nav from './nav'
import { MarginContainer } from './containers'

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
      <MarginContainer vertical={50}>
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
