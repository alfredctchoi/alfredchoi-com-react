import React from 'react';
import linkedinIcon from '../../logos/linkedin.png';
import emailIcon from '../../logos/email.png';
import './App.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system'

import work from '../../work';

const PageContainer = styled(Container)({
  marginTop: 100,
  marginBottom: 100,
  border: '1px solid grey',
  borderRadius: '10px'
})

const PageHeader = styled.header({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid grey'
})

const JobHeadline = styled.span({
  display: 'block',
  color: 'grey'
})

const CompanyLogoImage = styled.img({
  height: 24
})

const WorkCompanyLogo = styled.img({
  width: '100%',
  display: 'block'
})

const WorkDescription = styled.div({
})

const CompanySection = styled(Row)({
  marginTop: '2rem',
  marginBottom: '2rem'
})

const WorkCompanyName = styled.h4({
  marginTop: 0,
  marginBottom: 0
})

const JobResponsibilityList = styled.ul({
  marginTop: 0
})

const Name = styled.h1({
  marginBottom: '1rem'
})

const UnstyledList = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0
})

const InlineListItem = styled.li({
  float: 'left',
  marginRight: '5px'
})

const LinkedCompanyLogo = ({ src, link, alt }) => {
  return (
    <a href={link}>
      <CompanyLogoImage src={src} alt="linkedin" />
    </a>
  )
}

function App() {
  return (
    <PageContainer style={{
      paddingLeft: 0,
      paddingRight: 0
    }}>
      <PageHeader>
        <Container>
          <Row>
            <Col md={3}>
              <Name>ALFRED CHOI</Name>
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
            </Col>
            <Col md={9}>
              <p>
                Technical Lead at TELUS Digital working on transforming a 100 year old telecommunications company.
              </p>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <Container component="section">
        <h2>Work</h2>
        {
          work.map(({ company, logo, roles }) => {
            return (
              <CompanySection key={company}>
                <Col xs={12} md={3}>
                  <WorkCompanyLogo src={logo} alt={`${company} logo`} />
                </Col>
                <Col xs={12} md={9}>
                  <WorkCompanyName>{company}</WorkCompanyName>
                  {
                    roles.map(({
                      start,
                      end,
                      title,
                      isCurrent,
                      responsibilities
                    }) => {
                      return (
                        <WorkDescription key={title}>
                          <JobHeadline>
                            {start} - {isCurrent ? 'Present' : end}: {title}
                          </JobHeadline>
                          <JobResponsibilityList>
                            {
                              responsibilities.map(responsibility => {
                                return <li key={responsibility}>{responsibility}</li>
                              })
                            }
                          </JobResponsibilityList>
                        </WorkDescription>
                      )
                    })
                  }
                  <hr />
                </Col>
              </CompanySection>
            )
          })
        }
      </Container>
    </PageContainer>
  )
}

export default App;
