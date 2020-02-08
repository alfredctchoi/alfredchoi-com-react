import React from 'react'
import { Container } from 'react-grid-system'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import logo from '../logos/logo.png'
import linkedinIcon from '../logos/linkedin.png'
import emailIcon from '../logos/email.png'
import { UnstyledList } from './containers'

const HeaderContainer = styled.header({
  height: 100
})

const Name = styled.h1({
  marginTop: 0,
  marginBottom: 0,
  fontSize: '2rem'
})

const Logo = styled.img({
  height: '4rem',
  width: '4rem',
  marginRight: '0.6rem'
})

const VerticalAlignContainer = styled(Container)({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'space-between'
})

const HeaderInnerContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const CompanyLogoImage = styled.img({
  height: 24
})

const LinkedCompanyLogo = ({ src, link, alt }) => {
  return (
    <a href={link} style={{ marginLeft: 10, height: 24 }}>
      <CompanyLogoImage src={src} alt="linkedin" />
    </a>
  )
}

const NavItem = styled.li({
  float: 'left',
  marginLeft: 5,
  marginRight: 5
})

const Header = () => {
  return (
    <HeaderContainer>
      <VerticalAlignContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderInnerContainer>
            <Logo src={logo} alt="logo" />
            <Name>alfred choi</Name>
          </HeaderInnerContainer>
          <HeaderInnerContainer>
            <UnstyledList>
              <NavItem>
                <Link to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/projects">
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/resume">
                  Resume
                </Link>
              </NavItem>
              <NavItem>
                <LinkedCompanyLogo
                  src={linkedinIcon}
                  link="https://www.linkedin.com/in/alfred-choi-28173527/"
                  alt="linkedin"
                />
              </NavItem>
              <NavItem>
                <LinkedCompanyLogo
                  src={emailIcon}
                  link="mailto:alfred.ct.choi@gmail.com"
                  alt="email"
                />
              </NavItem>
            </UnstyledList>
          </HeaderInnerContainer>
        </div>
      </VerticalAlignContainer>
    </HeaderContainer>
  )
}

export default Header
