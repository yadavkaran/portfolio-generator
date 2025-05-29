import { Box, Container, Heading, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface SkillsProps {
  skills: {
    languages: string[]
    serviceManagement: string[]
    cloudAndInfrastructure: string[]
    incidentAndOperations: string[]
    frameworks: string[]
    familiar: string[]
    concepts: string[]
    tools: string[]
    database: string[]
  }
}

const Skills = ({ skills }: SkillsProps) => {
  const { colorMode } = useColorMode()

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Service Management', items: skills.serviceManagement },
    { title: 'Cloud & Infrastructure', items: skills.cloudAndInfrastructure },
    { title: 'Incident & Operations', items: skills.incidentAndOperations },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Familiar With', items: skills.familiar },
    { title: 'Concepts', items: skills.concepts },
    { title: 'Tools', items: skills.tools },
    { title: 'Database', items: skills.database }
  ]

  return (
    <Box
      as="section"
      id="skills"
      py={20}
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
    >
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            size="xl"
            mb={12}
            textAlign="center"
            bgGradient="linear(to-r, brand.400, brand.600)"
            bgClip="text"
          >
            Technical Skills
          </Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {skillCategories.map((category, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              p={6}
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              boxShadow="md"
            >
              <Heading as="h3" size="md" mb={4} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                {category.title}
              </Heading>
              <Box>
                {category.items.map((skill, i) => (
                  <Text
                    key={i}
                    fontSize="md"
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                    mb={2}
                  >
                    • {skill}
                  </Text>
                ))}
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Skills 