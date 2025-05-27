import { Box, Container, Heading, Text, VStack, Link, Icon, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'

const MotionBox = motion(Box)

interface ContactInfo {
  email: string
  phone: string
  github?: string
  linkedin: string
  twitter?: string
}

interface ContactProps {
  contact: ContactInfo
}

const Contact = ({ contact }: ContactProps) => {
  const { colorMode } = useColorMode()

  const socialLinks = [
    {
      name: 'Phone',
      url: `tel:${contact.phone}`,
      icon: FaPhone,
    },
    {
      name: 'Email',
      url: `mailto:${contact.email}`,
      icon: FaEnvelope,
    },
    {
      name: 'LinkedIn',
      url: contact.linkedin,
      icon: FaLinkedin,
    },
  ]

  if (contact.github) {
    socialLinks.push({
      name: 'GitHub',
      url: contact.github,
      icon: FaGithub,
    })
  }

  if (contact.twitter) {
    socialLinks.push({
      name: 'Twitter',
      url: contact.twitter,
      icon: FaTwitter,
    })
  }

  return (
    <Box
      as="section"
      id="contact"
      py={20}
      bg="rgba(147, 112, 219, 0.5)"
      backdropFilter="blur(10px)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 192, 203, 0.2) 0%, rgba(147, 112, 219, 0.2) 100%)',
        zIndex: -1,
      }}
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
            bgGradient="linear(to-r, pink.300, purple.300)"
            bgClip="text"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.2)"
          >
            Contact
          </Heading>
        </MotionBox>

        <VStack spacing={8}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            textAlign="center"
          >
            <Text fontSize="lg" color="pink.100" mb={8}>
              Feel free to reach out to me through any of the following channels.
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <VStack spacing={6}>
              {socialLinks.map((link, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.url}
                    isExternal
                    display="flex"
                    alignItems="center"
                    color="pink.200"
                    _hover={{
                      textDecoration: 'none',
                      color: 'pink.100',
                      transform: 'translateX(10px)',
                    }}
                    transition="all 0.2s"
                  >
                    <Icon
                      as={link.icon}
                      boxSize={6}
                      mr={3}
                      color="pink.300"
                    />
                    <Text fontSize="lg">{link.name}</Text>
                  </Link>
                </MotionBox>
              ))}
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 