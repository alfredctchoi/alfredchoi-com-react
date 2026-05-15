import React from 'react'
import { Row, Col } from 'react-grid-system'

import gif from './nav-gif.gif'
import { HideForMdAndAbove, ImageWithShadow } from '../../containers'

const TelusNav =  () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <h2>TELUS Navigation</h2>
        <h3>Background</h3>
        <p>In the previous version of My TELUS, the navigation menu did not have the logic to serve all the different customer segments.  For example, corporate users would require a different navigation menu context than a regular consumer.  Our team set out to solve the following problems for this project:</p>
        <ul>
          <li>
            <p>
              <strong>Information Architecture:</strong>provide a consistent information hierarchy to users to allow users to easily navigate the website
            </p>
          </li>
          <li>
            <p>
              <strong>Scalability:</strong> provide a framework that will allow the ability to serve all the customer segements
            </p>
          </li>
          <li>
            <p>
              <strong>Real Estate:</strong> having the navigation menu on the left hand side resulted wasted real estate under the navigation menu
            </p>
          </li>
        </ul>

        <HideForMdAndAbove>
          <ImageWithShadow
            src={gif}
            alt="TELUS Nav"
            style={{ width: '100%' }}
          />
        </HideForMdAndAbove>

        <h3>Challenges: Technical Complexity</h3>
        <p>The migration from our legacy stack (PHP) created a non ideal situation for our portal because we now had two authentication mechanisms.  One for the PHP stack and one for the Javascript stack.  Since we could not completely shut down our legacy system, we had to develop a solution that was able to be used in both the legacy and new stack.  This means that our solution needs to be able to support both authentication methods.  Again, I would like to reitereate that this is not ideal but we were able to solve the problem by creating a essentially routing the user through two login portals behind the scenes to ensure that sessions were set in both authentication mechanisms.  This allowed our navigation menu to be shared with both legacy and new stack.</p>
        <p>
          We ended building an API that fetches the customer information and determines which navigation items the user has access to before returning scripts and content to the front end to be loaded in dynamically.
      </p>
      </Col>
      <Col xs={0} md={6}>
        <img src={gif} alt="TELUS Nav" style={{ width: '100%' }} />
      </Col>
    </Row>
  )
}

export default TelusNav