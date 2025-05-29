import { Box, Container, Heading, Text, VStack, Link, Icon, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

const MotionBox = motion(Box)

interface ContactProps {
  email: string
  phone: string
  linkedin: string
  visa: string
}

const Contact = ({ email, phone, linkedin, visa }: ContactProps) => {
  const { colorMode } = useColorMode()

  const socialLinks = [
    {
      name: phone,
      url: `tel:${phone}`,
      icon: FaPhone,
    },
    {
      name: email,
      url: `mailto:${email}`,
      icon: FaEnvelope,
    },
    {
      name: linkedin,
      url: linkedin,
      icon: FaLinkedin,
    },
  ]

  return (
    <Box
      as="section"
      id="contact"
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
            Contact Information
          </Heading>
        </MotionBox>

        <VStack spacing={8} align="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            p={8}
            bg={colorMode === 'dark' ? 'gray.800' : 'white'}
            borderRadius="lg"
            boxShadow="md"
            width="100%"
            maxW="600px"
          >
            <VStack spacing={6} align="start">
              {socialLinks.map((link, index) => (
                <Box display="flex" alignItems="center" key={index}>
                  <Icon
                    as={link.icon}
                    boxSize={6}
                    mr={3}
                    color="brand.500"
                  />
                  <Link
                    href={link.url}
                    isExternal
                    color="brand.500"
                    _hover={{ textDecoration: 'underline', color: 'brand.400' }}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}

              <Box>
                <Text fontSize="md" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
                  {visa}
                </Text>
              </Box>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 