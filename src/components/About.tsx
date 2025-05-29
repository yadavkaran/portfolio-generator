import { Box, Container, Heading, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface AboutProps {
  description: string
}

const About = ({ description }: AboutProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="about"
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
            mb={8}
            textAlign="center"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            About Me
          </Heading>
          <Text
            fontSize="lg"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            textAlign="center"
            lineHeight="tall"
          >
            {description}
          </Text>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default About 