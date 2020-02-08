import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header'
import Home from './home'
import ProjectDetail from './projects/project-details'
import Resume from './resume'
import Projects from './projects'
import Nav from './nav'

const App = () => {
  return (
    <Router>
      <Header />
      <Nav />
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
    </Router>
  )
}

export default App
