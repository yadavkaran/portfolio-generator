import { Box, Container, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const MotionBox = motion(Box)

interface HeroProps {
  name: string
  title: string
}

const Hero = ({ name, title }: HeroProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.50'}
      pt={20}
    >
      <Container maxW="1200px">
        <VStack spacing={8} align="center" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              {name}
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
              {title}
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              leftIcon={<FaDownload />}
              colorScheme="blue"
              size="lg"
              onClick={() => {
                // Add resume download functionality
                console.log('Download resume')
              }}
            >
              Download Resume
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 