import telusLogo from './logos/telus.png';
import scotiabank from './logos/scotiabank.png';
import credico from './logos/credico.png';
import scribblelive from './logos/scribblelive.jpg';
import itravel2000 from './logos/itravel2000.svg';
import enprecis from './logos/enprecis.png';

const work = [
  {
    "company": "TELUS Communications",
    "logo": telusLogo,
    "roles": [{
      "start": "Oct 2019",
      "end": "",
      "isCurrent": true,
      "title": "Technical Lead (My TELUS)",
      "responsibilities": [
        "Lead multiple teams through the transformation of the My TELUS monolithic PHP application to React/NodeJS based micro-service architecture. This resulted in an 85% decrease in traffic to the legacy system",
        "Identify optimization opportunities within the digital platform and develop solutions",
        "Collaborate with digital partners to enhance API performance and ensure our applications free of vulnerabilities",
        "Drive discussions with architects, tech leads and developers to determine technical direction of My TELUS"
      ]
    }, {
      "start": "Jul 2018",
      "end": "Oct 2019",
      "isCurrent": false,
      "title": "Technical Team Lead",
      "responsibilities": [
        "Led development for the introduction of Peace of Mind mobility plans and Device Financing for My TELUS",
        "Collaborated with digital teams to develop reusable APIs and libraries",
        "Configure automated build tools in Circle CI and GitHub Actions",
        "Mentored junior and intermediate developers through pair programming, white boarding sessions and code reviews"
      ]
    }, {
      "start": "May 2017",
      "end": "Jul 2018",
      "isCurrent": false,
      "title": "Senior Software Developer",
      "responsibilities": [
        "Enabled users to easily conduct self serve activities by developing scalable applications in React & NodeJS for My TELUS. Projects included Usage, Phone Number Management and Rate Plan Change (2M, 250K, and 100K monthly active users respectively).",
        "Ensured quality & consistency of applications by implementing unit and end to end testing using Jest and Nightwatch",
        "Contributed to inner source code libraries"
      ]
    }]
  }, {
    "company": "Scotiabank",
    "logo": scotiabank,
    "roles": [{
      "start": "Dec 2016",
      "end": "May 2017",
      "isCurrent": false,
      "title": "Senior Software Developer",
      "responsibilities": [
        "Developed a travel insurance prototype app for iOS using ReactNative that allows users to plan for vacations as well as purchase travel insurance",
        "Collaborated with multiple teams to develop, test, and promote code into production while adhering to strict banking and security requirements",
        "Conducted introductory training sessions on ReactJS and Redux"
      ]
    }]
  }, {
    "company": "Credico USA LLC",
    "logo": credico,
    "roles": [{
      "start": "Jul 2013",
      "end": "Jan 2017",
      "isCurrent": false,
      "title": "Software Engineer Consultant",
      "responsibilities": [
        'Reported directly to the CTO and helped guide technical initiatives',
        'Designed and developed key sales application used across the world for delivering content to employees as well as senior leadership',
        'Developed a web CMS application in Angular that allows administrators to manage users and content in a mobile sales platform',
        'Worked with Senior management to ensure internal technical projects were adhering to industry standards.',
      ]
    }]
  }, {
    "company": "ScribbleLive",
    "logo": scribblelive,
    "roles": [{
      "start": "Jul 2015",
      "end": "Dec 2016",
      "isCurrent": false,
      "title": "Senior Software Engineer",
      "responsibilities": [
        'Led a team of developers to rebuild a content management application to provide a more intuitive user experience',
        'Introduced ReactJS framework and provided training to upscale the team',
        'Migrated and maintained infrastructure in AWS'
      ]
    }]
  }, {
    "company": "itravel2000",
    "logo": itravel2000,
    "roles": [{
      "start": "Nov 2014",
      "end": "Jul 2015",
      "isCurrent": false,
      "title": "Senior Software Engineer",
      "responsibilities": [
        'Migrated monolithic C# application into SPA and REST APIs to increase website performance',
        'Integrated FlightNetwork\'s search API to provide customers with a larger selection of flights',
        'Implemented Petro Canada partnership program to increase customer loyalty',
        'Worked closely with the UX/UI team to implement mobile first designs for Flight purchase flow for better user experience'
      ]
    }]
  }, {
    "company": "Enprecis Group (Formerly Vital Insights)",
    "logo": enprecis,
    "roles": [{
      "start": "Feb 2011",
      "end": "Nov 2014",
      "isCurrent": false,
      "title": "Intermediate Software Engineer",
      "responsibilities": [
        'Managed multiple implementations of an international online survey system',
        'Developed an intuitive website dashboard that provides insightful trends and analysis into survey responses',
        'Implemented SMS integration allowing users to communicate with customers through text message through the management console'
      ]
    }]
  }
]

export default work