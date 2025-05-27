import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import { Box } from '@chakra-ui/react'

function App() {
  const experiences = [
    {
      title: "Consultant Business Analyst",
      company: "Technoedge Solutions, India",
      duration: "June 2021 – September 2023",
      description: [
        "Led cross-functional projects, collaborating with stakeholders to define strategic objectives and enhance operational performance by 30%, optimizing workflows and resource allocation.",
        "Transformed marketing, sales, and finance data into actionable insights, driving a 20% increase in revenue growth and improving data-driven decision-making.",
        "Facilitated requirements-gathering workshops and acted as a bridge between business and IT teams, ensuring 100% alignment in project execution and reducing miscommunication risks.",
        "Implemented automation-driven solutions, streamlining processes and reducing manual effort by 50%, leading to a 25% improvement in project efficiency."
      ]
    },
    {
      title: "Secretarial Auditor",
      company: "S. Sathyanarayanan & Co.",
      duration: "July 2018 – May 2021",
      description: [
        "Assisted in statutory audits, ensuring compliance with ICSI regulations, leading to a 20% reduction in compliance issues and improving corporate governance practices.",
        "Organized and facilitated 50+ board meetings, managed statutory filings, and maintained corporate records with 100% accuracy in regulatory adherence.",
        "Streamlined documentation processes, reducing reporting time by 30% and enhancing efficiency in legal audits."
      ]
    },
    {
      title: "Associate Accountant",
      company: "Spiro Lifecare Pvt. Ltd.",
      duration: "July 2017 – June 2018",
      description: [
        "Planned and managed 5+ fundraising events, overseeing scheduling, volunteer recruitment, and execution, reducing production costs by 20%.",
        "Calculated profits from fundraisers by analyzing costs and revenues, improving financial planning efficiency for future events by 15%."
      ]
    }
  ]

  const projects = [
    {
      title: "Brand Journal – Easymovers",
      description: "Created a brand journal for Easymovers, conducting a SWOT analysis to assess competitive positioning and identify growth opportunities. Structured a business model for a Porter application, including financial forecasting, revenue streams, and a pseudo UI to support digital transformation.",
      techStack: ["Business Analysis", "SWOT Analysis", "Financial Forecasting", "UI Design"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      title: "Travel Buddy",
      description: "Developed 'Travel Buddy,' a platform to connect international students with local students for travel partnerships and housing assistance. Designed a swipe-right feature to simplify the process of finding travel companions and housing support, enhancing the relocation experience.",
      techStack: ["Platform Development", "UI/UX Design", "Student Services"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      title: "Data Analysis & Regression Model – Real Estate Company",
      description: "Transformed a regression model using live real estate data to analyze key market variables and predict trends in property values and rental pricing. Conducted a detailed analysis of factors such as location and amenities, providing actionable insights that informed investment decisions and optimized pricing strategies.",
      techStack: ["Data Analysis", "Regression Modeling", "Real Estate Analytics", "Python", "R"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      title: "Consumer Behavior: Brand Consciousness and Impact",
      description: "Conducted a comprehensive study on the influence of brand consciousness on consumer purchasing behavior through surveys and data analysis. Created actionable insights and strategic recommendations for businesses, based on research findings, to optimize brand strategies and consumer engagement.",
      techStack: ["Consumer Research", "Data Analysis", "Market Research", "Statistical Analysis"],
      githubUrl: "",
      demoUrl: ""
    }
  ]

  const skills = [
    {
      category: "Data Analytics and Visualization Tools",
      items: ["Excel - Advanced", "Power BI", "Tableau"]
    },
    {
      category: "Data Management",
      items: ["SQL", "PostgreSQL", "Oracle DB", "Microsoft Access"]
    },
    {
      category: "Programming and Scripting",
      items: ["Python - Pandas", "NumPy", "R"]
    },
    {
      category: "Statistical Techniques",
      items: ["Descriptive and Predictive Analytics", "Trends", "Forecasting", "Regression Models", "Hypothesis Testing", "T-tests", "ANOVA"]
    }
  ]

  const education = [
    {
      degree: "Master of Business Administration in Business Analytics",
      institution: "Pace University, NY",
      duration: "Jan 2024 – Dec 2025",
      description: "GPA: 3.95/4.0\nCourses: Visual Analytics, Driving Marketing Performance, DBMS, Creating Value through Finance"
    },
    {
      degree: "Master of Commerce in Business Management",
      institution: "Mumbai University, India",
      duration: "July 2019 – June 2021",
      description: "GPA: 3.9/4.0\nCourses: Quantitative and Statistical Analysis, Research Methodology in Business, Strategic Management"
    }
  ]

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box minH="100vh" bg="gray.900">
          <Navbar />
          <Hero 
            name="VEEDHI DHANAK" 
            title="Business Analytics Professional" 
          />
          <About 
            about="Experienced Business Analyst with a strong background in data analytics, business intelligence, and strategic planning. Proven track record in transforming complex data into actionable insights, optimizing business processes, and driving revenue growth. Currently pursuing MBA in Business Analytics at Pace University with a 3.95 GPA." 
          />
          <Experience experiences={experiences} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact 
            contact={{
              email: "vd61857n@pace.edu",
              phone: "(551) 280-6584",
              linkedin: "linkedin.com/in/veedhi-dhanak",
              twitter: ""
            }} 
          />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
