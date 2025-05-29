import { Box, Container, Flex, Button, useColorMode, IconButton, useDisclosure, VStack, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const MotionBox = motion(Box)

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      zIndex={1000}
      boxShadow="sm"
      backdropFilter="blur(10px)"
      bg={colorMode === 'dark' ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)'}
    >
      <Container maxW="1200px">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <ScrollLink to="hero" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              fontWeight="bold"
              fontSize="xl"
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
            >
              Siddhant
            </MotionBox>
          </ScrollLink>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
              >
                <ChakraLink
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  _hover={{
                    color: 'brand.500',
                    textDecoration: 'none',
                  }}
                >
                  {item.name}
                </ChakraLink>
              </ScrollLink>
            ))}
          </HStack>

          <Flex alignItems="center">
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
              variant="ghost"
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              _hover={{
                bg: 'transparent',
                color: 'brand.500',
              }}
              mr={2}
            />

            {/* Mobile menu button */}
            <IconButton
              aria-label="Toggle menu"
              icon={isOpen ? <FaTimes /> : <FaBars />}
              onClick={onToggle}
              variant="ghost"
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              _hover={{
                bg: 'transparent',
                color: 'brand.500',
              }}
              display={{ base: 'flex', md: 'none' }}
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box
            display={{ base: 'block', md: 'none' }}
            pb={4}
            bg={colorMode === 'dark' ? 'gray.900' : 'white'}
          >
            <VStack spacing={4} align="stretch">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  style={{ cursor: 'pointer' }}
                  onClick={onToggle}
                >
                  <ChakraLink
                    display="block"
                    px={4}
                    py={2}
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                    _hover={{
                      color: 'brand.500',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </ChakraLink>
                </ScrollLink>
              ))}
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default Navbar 