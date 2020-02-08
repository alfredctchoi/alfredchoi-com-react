import React, { Fragment } from 'react'
import styled from 'styled-components';

import work from '../../work';
import { VerticalBaselineContainer } from '../containers';
import { Text } from '../text-elements';


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
    <h2>Experience</h2>
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
                              <Text>{responsibility}</Text>
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