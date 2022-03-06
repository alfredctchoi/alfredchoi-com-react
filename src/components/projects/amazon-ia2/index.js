import React from "react";
import { Row, Col } from "react-grid-system";

import AmazonIA2 from "./amazon-ia2.png";
import AdvertisingConsoleOld from "./advertising-console-old.png";
import { ImageWithShadow } from "../../containers";
import Hairline from "../../hairline";

const TelusNav = () => {
  return (
    <>
      <div>
        <h2>Amazon Advertising Information Architecture</h2>
      </div>
      <Row>
        <Col xs={12} md={6}>
          <h3>The Problem</h3>
          <p>
            The navigation system did not provide an intuitive interface for the
            customers to navigate the Advertising Console.
          </p>
          <ul>
            <li>
              <p>
                <strong>Accessibility: </strong>
                All the applications were hidden behind a slide out menu that
                could only be accessed by the customer when they hovered over
                the hamburger menu. Not only is this design not accessible for
                screen readers, the menu would auto collapse when the customer
                hovered out of the slide out menu. This hovering behaviour led
                to customers having to open the navigation menu multiple times
                to navigate to another application.
              </p>
            </li>
            <li>
              <p>
                <strong>Rebranding: </strong>
                The old navigation system had dated designs that had not been
                updated since the launch of Amazon Advertising. Due to the
                strong growth of Amazon Advertising over the past years,
                leadership decided to rebrand Amazon Advertising to bring the
                design more inline with other Amazon products.
              </p>
            </li>
            <li>
              <p>
                <strong>Technical Debt: </strong>
                As mentioned in the previous point, the navigation system has
                not been updated since the launch of Amazon Advertising. The
                navigation menu was written with a combination of Java and
                React. The React application fully relied on <code>
                  props
                </code>{" "}
                for state management which resulted "prop drilling".
              </p>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <ImageWithShadow
              src={AdvertisingConsoleOld}
              alt="Amazon Ads Nav"
              width="100%"
            />
          </div>
        </Col>
      </Row>
      <Hairline vertical={30} />
      <Row>
        <Col xs={12}>
          <h3>Challenges</h3>
          <ul>
            <li>
              <p>
                <strong>Resourcing Constraints: </strong>This project required
                both backend and frontend changes to the application and the
                split was roughly 30% and 70% respectively. There were two
                Software Development Engineers (SDE) and only one Front End
                Engineer (FEE) working on this project. The front end
                development become the bottleneck of this project.
              </p>
            </li>
            <li>
              <p>
                <strong>Architecture Constraints: </strong>The legacy navigation
                renders on the client side. Our team wanted to implement server
                side rendering (SSR) for the navigation to improve the client
                side rendering performance. However, due to the reduced
                resourcing and time constraints, our team decided to leverage
                existing client side rendering architecture to complete the
                project on time.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
      <Hairline vertical={30} />
      <div>
        <h3>Results</h3>
      </div>
      <ImageWithShadow src={AmazonIA2} alt="Amazon Ads New Nav" width="100%" />
      <Row>
        <Col xs={12}>
          <p>
            From design to launch, the project took 11 months and our team was
            able to launch the rebranding and new information architecture on
            time in October 2021. Although we did not implement SSR for this
            project, the new Javascript bundle that we developed still included
            13% reduction in Javascript execution time, 10% reduction in bundle
            size and 13 point increase in Lighthouse score.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default TelusNav;
