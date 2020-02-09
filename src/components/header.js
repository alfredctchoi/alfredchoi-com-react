import React from 'react'
import { Container, useScreenClass } from 'react-grid-system'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import logo from '../logos/logo.png'
import { Link } from './containers'

const HeaderContainer = styled.header((isMobile) => {
  return {
    height: 100,
    padding: isMobile ? 0 : '20px 0'
  }
})

const Name = styled.h2({
  marginTop: 0,
  marginBottom: 0
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

const SocialLink = styled(Link)({
  marginLeft: 10
})

const Header = () => {
  const screenClass = useScreenClass()
  return (
    <HeaderContainer screenClass={screenClass}>
      <VerticalAlignContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderInnerContainer>
            <Logo src={logo} alt="logo" />
            <Name>alfred choi</Name>
          </HeaderInnerContainer>
          <HeaderInnerContainer>
            <SocialLink
              href="https://www.linkedin.com/in/alfred-choi-28173527/"
              target="_blank"
            >
              <FontAwesomeIcon size="lg" icon={faLinkedin} />
            </SocialLink>
            <SocialLink
              href="https://www.github.com/alfredctchoi"
              target="_blank"
            >
              <FontAwesomeIcon size="lg" icon={faGithub} />
            </SocialLink>
            <SocialLink href="mailto:alfred.ct.choi@gmail.com">
              <FontAwesomeIcon size="lg" icon={faEnvelopeSquare} />
            </SocialLink>
          </HeaderInnerContainer>
        </div>
      </VerticalAlignContainer>
    </HeaderContainer>
  )
}

export default Header
