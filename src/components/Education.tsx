import { Box, Container, Heading, VStack, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface EducationItem {
  degree: string
  institution: string
  duration: string
  description: string
}

interface EducationProps {
  education: EducationItem[]
}

const Education = ({ education }: EducationProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="education"
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
            Education
          </Heading>
        </MotionBox>

        <VStack spacing={8} align="stretch">
          {education.map((edu, index) => (
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
              <Text fontSize="xl" fontWeight="bold" color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                {edu.degree}
              </Text>
              <Text fontSize="lg" color="blue.400" mb={2}>
                {edu.institution}
              </Text>
              <Text fontSize="md" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} mb={4}>
                {edu.duration}
              </Text>
              <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
                {edu.description}
              </Text>
            </MotionBox>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}

export default Education 