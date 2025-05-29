import { Box, Container, Heading, VStack, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface EducationItem {
  degree: string
  institution: string
  duration: string
  location: string
}

interface EducationProps {
  education: EducationItem[]
  certifications: string[]
  awards: string[]
}

const Education = ({ education, certifications, awards }: EducationProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="education"
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
            Education & Achievements
          </Heading>
        </MotionBox>

        <VStack spacing={12} align="stretch">
          {/* Education Section */}
          <Box>
            <Heading as="h3" size="lg" mb={6} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Education
            </Heading>
            <VStack spacing={6} align="stretch">
              {education.map((edu, index) => (
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
                    {edu.degree}
                  </Text>
                  <Text fontSize="lg" color="brand.500" mb={2}>
                    {edu.institution}
                  </Text>
                  <Text fontSize="md" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                    {edu.duration} | {edu.location}
                  </Text>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Heading as="h3" size="lg" mb={6} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Professional Certifications
            </Heading>
            <MotionBox
              p={6}
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              boxShadow="md"
            >
              <VStack align="start" spacing={2}>
                {certifications.map((cert, index) => (
                  <Text
                    key={index}
                    fontSize="md"
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  >
                    • {cert}
                  </Text>
                ))}
              </VStack>
            </MotionBox>
          </Box>

          {/* Awards Section */}
          <Box>
            <Heading as="h3" size="lg" mb={6} color={colorMode === 'dark' ? 'white' : 'gray.800'}>
              Awards & Achievements
            </Heading>
            <MotionBox
              p={6}
              bg={colorMode === 'dark' ? 'gray.800' : 'white'}
              borderRadius="lg"
              boxShadow="md"
            >
              <VStack align="start" spacing={2}>
                {awards.map((award, index) => (
                  <Text
                    key={index}
                    fontSize="md"
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  >
                    • {award}
                  </Text>
                ))}
              </VStack>
            </MotionBox>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Education 