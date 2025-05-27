import { Box, Container, Heading, SimpleGrid, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface SkillCategory {
  category: string
  items: string[]
}

interface SkillsProps {
  skills: SkillCategory[]
}

const Skills = ({ skills }: SkillsProps) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="section"
      id="skills"
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
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Skills
          </Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {skills.map((category, index) => (
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
              <Text
                fontSize="xl"
                fontWeight="bold"
                mb={4}
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
              >
                {category.category}
              </Text>
              <SimpleGrid columns={2} spacing={2}>
                {category.items.map((skill, i) => (
                  <Text
                    key={i}
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                    fontSize="md"
                  >
                    • {skill}
                  </Text>
                ))}
              </SimpleGrid>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Skills 