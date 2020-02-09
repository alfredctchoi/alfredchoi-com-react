import React, { Fragment } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

import work from '../../work';
import { VerticalBaselineContainer, Link } from '../containers';
// import downloadIcon from './download.svg'


const JobHeadline = styled.h4({
  display: 'block',
  color: 'grey',
  marginTop: 0
})

const WorkCompanyLogo = styled.img({
  height: 25,
  display: 'block'
})

const WorkDescription = styled.div({
  margin: '10px 0'
})

const CompanySection = styled.div({
  marginTop: '2rem',
  marginBottom: '2rem'
})

const WorkCompanyName = styled.h3({
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 10
})

const JobResponsibilityList = styled.ul({
  margin: 0
})

export default () => {
  return <Fragment>
    <div>
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/16IRv25kV42LQT8JHJAMChISUiR0x8dsW/view?usp=sharing"
      >
        <FontAwesomeIcon icon={faFileDownload} />
        <span style={{ marginLeft: 5 }}>Download Resume</span>
      </Link>
    </div>
    <h2>
      Experience
    </h2>
    {
      work.map(({ company, logo, roles }) => {
        return (
          <CompanySection key={company}>
            <VerticalBaselineContainer>
              <WorkCompanyLogo src={logo} alt={`${company} logo`} />
              <WorkCompanyName>{company}</WorkCompanyName>
            </VerticalBaselineContainer>
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
                      {start} → {isCurrent ? 'Present' : end} - {title}
                    </JobHeadline>
                    <JobResponsibilityList>
                      {
                        responsibilities.map(responsibility => {
                          return (
                            <li key={responsibility}>
                              <span>{responsibility}</span>
                            </li>
                          )
                        })
                      }
                    </JobResponsibilityList>
                  </WorkDescription>
                )
              })
            }
          </CompanySection>
        )
      })
    }
  </Fragment>
}