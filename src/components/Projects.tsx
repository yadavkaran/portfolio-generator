import { Box, Container, Heading, SimpleGrid, Text, Link, Tag, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const MotionBox = motion(Box)

interface Project {
  title: string
  description: string
  techStack: string[]
  githubUrl: string
  demoUrl: string
}

interface ProjectsProps {
  projects: Project[]
}

const Projects = ({ projects }: ProjectsProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="projects"
      py={20}
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
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
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Projects
          </Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              p={6}
              bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
              borderRadius="lg"
              boxShadow="md"
            >
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {project.title}
              </Text>
              <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} mb={4}>
                {project.description}
              </Text>
              <Box mb={4}>
                {project.techStack.map((tech, i) => (
                  <Tag
                    key={i}
                    size="md"
                    colorScheme="blue"
                    mr={2}
                    mb={2}
                  >
                    {tech}
                  </Tag>
                ))}
              </Box>
              <Box display="flex" gap={4}>
                <Link
                  href={project.githubUrl}
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="blue.400"
                  _hover={{ textDecoration: 'none', color: 'blue.500' }}
                >
                  <FaGithub style={{ marginRight: '4px' }} />
                  GitHub
                </Link>
                <Link
                  href={project.demoUrl}
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="blue.400"
                  _hover={{ textDecoration: 'none', color: 'blue.500' }}
                >
                  <FaExternalLinkAlt style={{ marginRight: '4px' }} />
                  Live Demo
                </Link>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Projects 