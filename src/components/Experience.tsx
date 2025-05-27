import { Box, Container, Heading, VStack, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface ExperienceItem {
  title: string
  company: string
  duration: string
  description: string[]
}

interface ExperienceProps {
  experiences: ExperienceItem[]
}

const Experience = ({ experiences }: ExperienceProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="experience"
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
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Work Experience
          </Heading>
        </MotionBox>

        <VStack spacing={8} align="stretch">
          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              p={6}
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              boxShadow="md"
            >
              <Text fontSize="xl" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                {exp.title}
              </Text>
              <Text fontSize="lg" color="blue.400" mb={2}>
                {exp.company}
              </Text>
              <Text fontSize="md" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mb={4}>
                {exp.duration}
              </Text>
              <VStack align="start" spacing={2}>
                {exp.description.map((item, i) => (
                  <Text
                    key={i}
                    fontSize="md"
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  >
                    • {item}
                  </Text>
                ))}
              </VStack>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Experience 