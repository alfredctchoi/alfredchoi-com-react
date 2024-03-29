import React from 'react'
import { Col, Row } from 'react-grid-system'
import telusPlansAndDevices from './telus-plans-and-devices.png'
import telusUsage from './telus-usage-overhaul.png'
import telusPom from './telus-peace-of-mind.jpg'
import telusDeviceFinancingExample from './telus-device-financing-example.png'
import { CenteredTextContainer } from '../../containers'
import Hairline from '../../hairline'

const TelusPom = () => {
  return (
    <div>
      <h2>TELUS Peace of Mind Plans</h2>
      <Row>
        <Col xs={12} md={6}>
          <p>Before Peace of Mind Plans were introduced, mobility customers faced two major issues:</p>
          <ol>
            <li>
              <p>
                <strong>Data Overage Complaints:</strong> Many of TELUS' customers have expressed frustration about overage charges with their data usage.
              </p>
            </li>
            <li>
              <p>
                <strong>Subsidized Plans:</strong> For the mobility users that were on a subsidized phone plan, our systems were not able to differentiate which portion of the billing statement was going towards the phone subsidy and which portion was going to the phone plan.
              </p>
            </li>
          </ol>
        </Col>
        <Col xs={12} md={6}>
          <img style={{ width: '100%' }} src={telusPom} alt="TELUS Peace of Mind" />
        </Col>
      </Row>

      <Hairline vertical={30} />

      <Row>
        <Col xs={12} md={6}>
          <img style={{ width: '100%' }} src={telusDeviceFinancingExample} alt="TELUS Device Financing" />
        </Col>
        <Col xs={12} md={6}>
          <h3>Solution</h3>
          <p>
            Device financing allows TELUS to clearly separate the charges for the phone plan and charges for the device if the user purchased a device with a phone plan through TELUS.  As many of the mobile devices are becoming increasingly expensive, device financing makes the devices more affordable.
        </p>
          <p>
            The business decided to solve the two problems by introducing unlimited data plans and device financing.  Unlimited plans will allow customers to consume data at LTE speeds until they hit their data limit.  After the user consumes all of their data for the month, they can continue to use data at a slower speed.  The data that they consumed on the slower network speed will not be charged.  Users can purchase Fast Passes to resume their LTE network speeds if they wish.
        </p>
        </Col>
      </Row>

      <Hairline vertical={30} />

      <Row>
        <Col xs={12} md={6}>
          <h3>Challenges</h3>
          <p>This is fundamental change in the way all the underlying systems work at  TELUS.  There needed to be collaboration and coordination from every level of the organization.  From the systems of records level all the way up to the digital experiences.</p>
          <p>Our team was responsible for updating the usage and plan change digital experiences in My TELUS.  Because the data metering systems needed to be updated to account for unlimited data usage, our team had to develop a new usage experience to accomodate for users with the new unlimited plans.</p>
        </Col>
        <Col xs={12} md={6}>
          <CenteredTextContainer>
            <img style={{ width: '100%' }} src={telusUsage} alt="TELUS plans and devices" />
          </CenteredTextContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>
            For the plan change digital experience, there were complex rules on which users were allowed to switch to the new plans and which users could only modify their existing plans.  This was done to ensure that users were gradually migrated to the new plans in a controlled manner.
        </p>
        </Col>
        <Col xs={12} md={6}>
          <CenteredTextContainer>
            <img style={{ width: '100%' }} src={telusPlansAndDevices} alt="TELUS plans and devices" />
          </CenteredTextContainer>
        </Col>
      </Row>
    </div>
  )
}

export default TelusPom