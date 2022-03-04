import React from 'react'
import { Col } from 'react-grid-system'

import { MarginRow, ImageWithShadow, HideForMdAndAbove } from '../../containers'
import oldUsage from './old.png'
import newUsage from './new.png'
import Hairline from '../../hairline'

const TelusUsage = () => {
  return (
    <div>
      <h2>TELUS Usage Redesign</h2>
      <MarginRow vertical={20}>
        <Col xs={12} md={6}>
          <h3>
            Legacy Usage
          </h3>
          <p>The previous iteration of the usage page was developed in PHP using the Code Igniter framework and has not been updated since 2015.  We took the opportunity to redesign the usage page while migrating from PHP to Javascript.</p>

          <HideForMdAndAbove>
            <ImageWithShadow
              style={{ width: '100%' }}
              src={oldUsage}
              alt="oldTELUS usage"
            />
          </HideForMdAndAbove>

          <h3>
            Challenges: Business Complexity
          </h3>
          <p>Our design and code had to be able to support all the permutations of mobility plans that were sold within the past decade.  This also includes the new unlimited plans that were launched July 2018.  We originally start down the path where we would build different usage layouts based on the mobility plan the user was on but realized that there would be too many permutations to build.  We end up going with a generic solution that displays all the meters that the user was consuming as a starting point.  Once we have determined that this generic solution solves for the majority of the use cases, we can then determine design patterns and iterate on the design.</p>

          <HideForMdAndAbove>
            <ImageWithShadow
              style={{ width: '100%' }}
              src={newUsage}
              alt="oldTELUS usage"
            />
          </HideForMdAndAbove>
          <h3>
            Challenges: Technical Complexity
          </h3>
          <p>To further complicate the project, we had to consume many legacy upstream service calls to compose data structures to fit our designs.  For example, we would have to make sequential service calls and then manually stitch the data together based on identifiers from the resulting payloads.  This increased the complexity of our API more than we would have wanted.  Many of these complexities can be resolved at the database level.</p>
          <p>Moreover, these service calls had high response times.  We decided to load different portions of the page asynchronously to increase the perceived performance
          </p>
        </Col>
        <Col xs={0} md={6}>
          <ImageWithShadow
            style={{ width: '100%' }}
            src={oldUsage}
            alt="oldTELUS usage"
          />
          <Hairline vertical={30} />
          <ImageWithShadow
            style={{ width: '100%' }}
            src={newUsage}
            alt="new TELUS usage"
          />
        </Col>
      </MarginRow>
    </div>
  )
}

export default TelusUsage