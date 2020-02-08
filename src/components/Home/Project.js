import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'

import { CenteredTextContainer } from '../Containers'
import Hairline from '../Hairline'

const ImageWithShadow = styled.img(({ showShadow }) => {
  return {
    boxShadow: showShadow && '5px 5px 3px rgba(0,0,0,0.2)'
  }
})

const Paragraph = styled.p({
  marginTop: '2rem',
  marginBottom: '2rem',
  fontSize: '1.2rem',
  lineHeight: '2.5rem'
})


const ProjectContainer = styled.article({

})

const Project = ({
  description,
  title,
  image,
  includeShadow
}) => {
  return (
    <ProjectContainer>
      <CenteredTextContainer>
        <h2>{title}</h2>
      </CenteredTextContainer>
      <Hairline />
      <Row>
        <Col xs={12} md={8} offset={{ md: 2 }}>
          <CenteredTextContainer>
            <ImageWithShadow
              showShadow={includeShadow}
              style={{ height: 375 }}
              src={image}
              alt={title}
            />
          </CenteredTextContainer>
          <Paragraph>
            {description}
          </Paragraph>
        </Col>
      </Row>
    </ProjectContainer >
  )
}

export default Project