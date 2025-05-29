import { Box, Container, Heading, Text, Button, VStack, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

// Import your background images here
import heroBg1 from '../assets/sid3.jpg' // <-- Replace with your actual image path
import heroBg2 from '../assets/sid4.jpg' // <-- Replace with your actual image path

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
      position="relative"
      overflow="hidden"
    >
      {/* Background Element 1 */}
      <Box
        position="absolute"
        top={{ base: "10%", md: "15%" }}
        left={{ base: "-20%", md: "-10%" }}
        width={{ base: "80%", md: "40%" }}
        height={{ base: "60%", md: "70%" }}
        backgroundImage={`url(${heroBg1})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity="0.5" // Adjust opacity as needed
        zIndex={1}
      />

      {/* Background Element 2 */}
      <Box
        position="absolute"
        bottom={{ base: "10%", md: "15%" }}
        right={{ base: "-20%", md: "-10%" }}
        width={{ base: "80%", md: "40%" }}
        height={{ base: "60%", md: "70%" }}
        backgroundImage={`url(${heroBg2})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity="0.5" // Adjust opacity as needed
        zIndex={1}
      />

      <Container maxW="1200px" position="relative" zIndex={2}> {/* Ensure content is above background */} 
        <VStack spacing={8} align="center" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
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
              colorScheme="brand"
              size="lg"
              onClick={() => {
                // Add resume download functionality
                window.open('https://drive.google.com/file/d/1-2eRZq2N7RbGctKydtfrL3w-ga8d5XHe/view?usp=sharing', '_blank');
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