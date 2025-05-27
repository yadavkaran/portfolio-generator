import { Box, Flex, Button, useColorModeValue, IconButton, useDisclosure, VStack } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HamburgerIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const Navbar = () => {
  const sections = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex={1000}
      bg="rgba(147, 112, 219, 0.5)"
      backdropFilter="blur(10px)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      borderBottom="1px solid rgba(255, 255, 255, 0.1)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        h={20}
        alignItems="center"
        justifyContent="space-between"
      >
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            fontWeight="bold"
            fontSize={{ base: "xl", md: "2xl" }}
            letterSpacing="wider"
            color="white"
            bgGradient="linear(to-r, pink.300, purple.400)"
            bgClip="text"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
            _hover={{
              bgGradient: "linear(to-r, pink.200, purple.300)",
              transform: "scale(1.05)",
            }}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            VEEDHI
          </Box>
        </MotionBox>

        {/* Desktop Navigation */}
        <Flex
          gap={6}
          display={{ base: 'none', md: 'flex' }}
        >
          {sections.map((section, index) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  color="white"
                  fontSize="md"
                  fontWeight="medium"
                  letterSpacing="wide"
                  px={4}
                  py={2}
                  position="relative"
                  _hover={{
                    bg: 'rgba(147, 112, 219, 0.2)',
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(147, 112, 219, 0.3)',
                    _after: {
                      width: '80%',
                    },
                  }}
                  _active={{
                    bg: 'rgba(147, 112, 219, 0.3)',
                  }}
                  transition="all 0.3s ease"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '0',
                    left: '50%',
                    bg: 'purple.300',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {section}
                </Button>
              </MotionBox>
            </Link>
          ))}
        </Flex>

        {/* Mobile Navigation */}
        <IconButton
  display={{ base: 'flex', md: 'none' }}
  onClick={onOpen}
  icon={<HamburgerIcon />}
  aria-label="Open Menu"
  bg="purple.100"
  color="purple.700"
  borderRadius="full"
  _hover={{ bg: 'purple.200' }}
  _active={{ bg: 'purple.300' }}
/>

        {/* Mobile Menu Drawer */}
       {/* Mobile Menu Drawer */}
<Box
  position="fixed"
  top={0}
  right={0}
  bottom={0}
  width="70%"
  bg="rgba(50, 21, 93, 1)" // keep your dark theme
  backdropFilter="blur(10px)"
  zIndex={2000}
  transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
  transition="transform 0.3s ease-in-out"
  boxShadow="-10px 0 30px rgba(0, 0, 0, 0.1)"
  display={{ base: 'block', md: 'none' }}
>
  <Flex justify="flex-end" p={4}>
    <IconButton
      onClick={onClose}
      icon={<HamburgerIcon />}
      aria-label="Close Menu"
      variant="ghost"
      color="white" // change from black to white
      _hover={{ bg: 'rgba(147, 112, 219, 0.2)' }}
      _active={{ bg: 'rgba(147, 112, 219, 0.3)' }}
    />
  </Flex>
  <VStack as="nav" spacing={4} mt={8} px={4}>
    {sections.map((section) => (
      <Link
        key={section}
        to={section.toLowerCase()}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={onClose}
        style={{ width: '100%' }}
      >
        <Button
          variant="ghost"
          color="white"
          fontSize="lg"
          fontWeight="medium"
          letterSpacing="wide"
          w="100%"
          justifyContent="flex-start"
          _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }} // more contrast
          _active={{ bg: 'rgba(255, 255, 255, 0.2)' }}
        >
          {section}
        </Button>
      </Link>
    ))}
  </VStack>
</Box>
      </Flex>
    </Box>
  )
}

export default Navbar 