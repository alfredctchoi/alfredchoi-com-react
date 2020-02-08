import React, { Fragment } from 'react'

import Aside from './aside'
import { StyledUnorderedList } from '../containers'
import { Text } from '../text-elements'

const skills = [{
  category: 'Programming',
  items: [
    'React',
    'NodeJS',
    'Angular 1',
    'PHP',
    'C#'
  ]
}, {
  category: 'Database',
  items: [
    'MySQL',
    'Redis',
    'MSSQL'
  ]
}, {
  category: 'Server',
  items: [
    'AWS (EC2, S3, Route53, etc..)',
    'Docker',
    'Kubernetes'
  ]
}]

export default () => {
  return (
    <Aside title="Skills">
      {
        skills.map(({ category, items }) => {
          return (
            <Fragment key={category}>
              <h4 style={{
                marginBottom: 0
              }}>
                {category}
              </h4>
              <StyledUnorderedList>
                {items.map((item) => {
                  return (
                    <li key={item}>
                      <Text>{item}</Text>
                    </li>
                  )
                })}
              </StyledUnorderedList>
            </Fragment>
          )
        })
      }
    </Aside>
  )
}