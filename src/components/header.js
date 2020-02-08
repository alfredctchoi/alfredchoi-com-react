import React from 'react'
import { Container } from 'react-grid-system'
import styled from 'styled-components'

import logo from '../logos/logo.png'
import linkedinIcon from '../logos/linkedin.png'
import emailIcon from '../logos/email.png'
import { UnstyledList, InlineListItem } from './containers'

const HeaderContainer = styled.header({
  height: 100,
  borderBottom: '1px solid black',
  padding: '20px 0'
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
  height: 30
})

const LinkedCompanyLogo = ({ src, link, alt }) => {
  return (
    <a href={link} style={{ marginLeft: 10, height: 30 }}>
      <CompanyLogoImage src={src} alt="linkedin" />
    </a>
  )
}

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
              <InlineListItem>
                <LinkedCompanyLogo
                  src={linkedinIcon}
                  link="https://www.linkedin.com/in/alfred-choi-28173527/"
                  alt="linkedin"
                />
              </InlineListItem>
              <InlineListItem>
                <LinkedCompanyLogo
                  src={emailIcon}
                  link="mailto:alfred.ct.choi@gmail.com"
                  alt="email"
                />
              </InlineListItem>
            </UnstyledList>
          </HeaderInnerContainer>
        </div>
      </VerticalAlignContainer>
    </HeaderContainer>
  )
}

export default Header
