import { Box, Container, Heading, Text, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface AboutProps {
  about: string
}

const About = ({ about }: AboutProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="about"
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
            mb={8}
            textAlign="center"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            About Me
          </Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="lg" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
              {about}
            </Text>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default About 