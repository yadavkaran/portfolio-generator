import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'pink.900',
        color: 'white',
        backgroundImage: 'linear-gradient(to bottom right, #FF69B4, #9370DB, #FF1493)',
        backgroundAttachment: 'fixed',
      },
      'h1, h2, h3, h4, h5, h6': {
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
      p: {
        color: 'pink.100',
      },
      a: {
        color: 'pink.200',
        _hover: {
          color: 'pink.100',
        },
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'pink.500',
          color: 'white',
          _hover: {
            bg: 'pink.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          transition: 'all 0.2s',
        },
        ghost: {
          color: 'pink.100',
          _hover: {
            bg: 'pink.700',
            color: 'white',
          },
        },
      },
    },
    Box: {
      baseStyle: {
        bg: 'rgba(255, 192, 203, 0.1)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        borderRadius: 'lg',
        boxShadow: 'xl',
      },
    },
  },
  semanticTokens: {
    colors: {
      bodyBg: {
        default: 'pink.900',
      },
      bodyText: {
        default: 'pink.100',
      },
    },
  },
})

export { theme } 