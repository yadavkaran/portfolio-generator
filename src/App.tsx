import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { Box } from '@chakra-ui/react'

const experiences = [
  {
    title: "Service Delivery, Operations Manager, and Cloud Architect - BMW (VDM) | IDOP",
    company: "Capgemini Technology Services",
    duration: "June 2021 – Present",
    description: [
      "Led a high-performing 25-member team, delivering L2/L3 support for AWS and OS-level issues, achieving 98% resolution rate while consistently meeting SLA compliance.",
      "Architected and deployed highly scalable AWS infrastructure, reducing operational costs by 40% and increasing system availability by 30%.",
      "Managed and resolved over 150 major incidents, maintaining a 95% customer satisfaction score through proactive stakeholder communication and timely incident resolution.",
      "Decreased incident volume by 90% through targeted problem management, root cause analysis (RCA), and process improvements, significantly boosting service efficiency.",
      "Collaborated with cross-functional teams across India, Germany, Poland, UK, and China to implement Agile practices, aligning cloud solutions with business goals, and boosting team productivity by 25%.",
      "Led successful migration from OpenShift to AWS and transitioned on-premises databases to Amazon RDS, improving system scalability and performance by 40%.",
      "Spearheaded process automation initiatives, reducing manual work by 35% and increasing overall team productivity and efficiency."
    ]
  },
  {
    title: "Java Team Lead — Opel Vauxhall",
    company: "Capgemini Technology Services",
    duration: "May 2019 – May 2021",
    description: [
      "Managed the operational aspects of five critical OPEL sales and after-sales applications, leading the successful transition from GM to OV and enabling seamless VDI access for 100+ stakeholders.",
      "Ensured server-side performance optimization on Linux/Sun Solaris, reducing system downtimes by 40% and resolving critical SSL issues in collaboration with cross-functional teams.",
      "Played a key role in client communication and requirements gathering, traveling to London to ensure smooth transition and timely delivery of the project milestones."
    ]
  },
  {
    title: "Senior Java Developer",
    company: "Velocis Systems (P) Ltd",
    duration: "February 2019 – May 2019",
    description: [
      "Led the development of UI-centric web applications for IOCL's Marketing Department, improving user experience and increasing user engagement by 25%.",
      "Enhanced and optimized existing systems using XML, JavaScript, JSON, AJAX, and jQuery, resulting in a 20% reduction in application load times.",
      "Developed efficient, scalable code with a focus on maintainability, which improved application reliability by 15%."
    ]
  },
  {
    title: "Java Developer",
    company: "Cyfuture India Pvt Ltd",
    duration: "August 2015 – January 2019",
    description: [
      "Contributed to the software development lifecycle at IOCL's Marketing Department, leading the creation of specifications and the development of mission-critical applications.",
      "Maintained and supported vendor applications, ensuring 99% uptime and contributing to the development of Web and Windows applications with a focus on scalability.",
      "Developed reusable code and automated tasks, reducing development time by 20% and increasing team output."
    ]
  },
  {
    title: "Java Developer (Apprenticeship)",
    company: "Indian Oil Corporation Limited (IOCL), Mumbai",
    duration: "August 2014 – July 2015",
    description: [
      "Maintained comprehensive project documentation and developed custom reports using Actuate, enhancing reporting efficiency by 30%.",
      "Optimized and developed GUIs using JSP, Struts, CSS, HTML, Ajax, and JavaScript, improving UI performance and reducing page load time by 25%.",
      "Designed and implemented UML diagrams to outline system architecture, contributing to better system understanding and collaboration."
    ]
  }
]

const skills = {
  languages: ["Java", "JavaScript", "TypeScript", "C++", "HTML", "CSS"],
  serviceManagement: ["ITIL Framework and SLA Management", "Stakeholder Management", "Escalation Handling", "Agile/Scrum Experience"],
  cloudAndInfrastructure: ["AWS Expertise", "Service Delivery Management", "Governance and Compliance", "Key Performance Indicators"],
  incidentAndOperations: ["Major Incident Management (MIM)", "Service Operations Management"],
  frameworks: ["Spring Boot", "JPA/Hibernate", "React.js", "Node.js", "Redux", "Spring MVC"],
  familiar: ["AWS", "RDS", "Kafka", "Django"],
  concepts: ["Data Structures and Algorithms", "DBMS", "Operating System", "Low-Level Design", "Microservices", "OOPS", "REST APIs"],
  tools: ["IntelliJ IDEA", "Git", "Docker", "MySQL Workbench", "Postman", "Microsoft Visual Studio Code", "Android Studio", "CI/CD pipelines"],
  database: ["MySQL", "OracleDB", "MongoDB", "PostgreSQL", "DynamoDB", "Elastic"]
}

const education = [
  {
    degree: "Software Engineering",
    institution: "Global National Institute of Information Technology",
    duration: "2013 – 2015",
    location: "Mumbai"
  },
  {
    degree: "Bachelor of Commerce (B. Com)",
    institution: "Thakur College of Science and Commerce",
    duration: "2013",
    location: "Mumbai University"
  }
]

const certifications = [
  "Microsoft Certification in MS-SQL 2008",
  "Decision Making Certification by Harvard Manage Mentor",
  "Presentation Skills Certification by Harvard Manage Mentor",
  "Team Creation Certification by Harvard Manage Mentor",
  "Young Emerging Professionals (YEP)",
  "Aspiring Architect L0 Certification"
]

const awards = [
  "Received the STAR (Special Thanks and Recognition) Award for the period October 1, 2019 to December 31, 2019.",
  "Received the Xtra Mile Award for Enabling Layer - BMW Q2 2021.",
  "Received the Xtra Mile Award for Opel Vauxhall Q3 2021."
]

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box minH="100vh" bg="gray.900">
          <Navbar />
          <Hero 
            name="SIDDHANT YADAV"
            title="Service Delivery Manager and Cloud Architect"
          />
          <About 
            description="Service Delivery Manager and Cloud Architect with over 10 years of experience leading teams and optimizing AWS infrastructures. Expert in scalable cloud architecture solutions, incident management, and driving operational efficiency. Skilled in Agile methodologies, service delivery, and stakeholder engagement, with a focus on reducing costs and improving system performance. Known for delivering complex projects on time and aligning cloud solutions with business goals, consistently exceeding customer expectations."
          />
          <Experience experiences={experiences} />
          <Skills skills={skills} />
          <Education education={education} certifications={certifications} awards={awards} />
          <Contact 
            email="yadavsiddhant5@gmail.com"
            phone="+91 7506927677"
            linkedin="https://www.linkedin.com/in/siddhant-yadav-53aa5b160/"
            visa="Valid United States of America (U.S). B1/B2 Visa (Multiple Entry, Valid Until 2035)"
          />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
