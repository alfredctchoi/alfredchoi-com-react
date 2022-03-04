import React, { Fragment } from "react";
import styled from "styled-components";

import work from "../../work";
import { VerticalCenterContainer } from "../containers";
// import downloadIcon from './download.svg'

const JobHeadline = styled.h4({
  display: "block",
  color: "grey",
  marginTop: 0,
});

const WorkCompanyLogo = styled.img({
  height: 15,
  width: "auto",
  display: "block",
});

const WorkDescription = styled.div({
  margin: "10px 0",
});

const CompanySection = styled.div({
  marginTop: "2rem",
  marginBottom: "2rem",
});

const WorkCompanyName = styled.h3({
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 15
});

const JobResponsibilityList = styled.ul({
  margin: 0,
});

const WorkExperience = () => {
  return (
    <Fragment>
      <h2>Experience</h2>
      {work.map(({ company, logo, roles }) => {
        return (
          <CompanySection key={company}>
            <VerticalCenterContainer>
              <WorkCompanyLogo src={logo} alt={`${company} logo`} />
              <WorkCompanyName>{company}</WorkCompanyName>
            </VerticalCenterContainer>
            {roles.map(({ start, end, title, isCurrent, responsibilities }) => {
              return (
                <WorkDescription key={title}>
                  <JobHeadline>
                    {start} → {isCurrent ? "Present" : end} - {title}
                  </JobHeadline>
                  <JobResponsibilityList>
                    {responsibilities.map((responsibility) => {
                      return (
                        <li key={responsibility}>
                          <span>{responsibility}</span>
                        </li>
                      );
                    })}
                  </JobResponsibilityList>
                </WorkDescription>
              );
            })}
          </CompanySection>
        );
      })}
    </Fragment>
  );
};

export default WorkExperience;
