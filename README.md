# Portfolio Generator

A modern, responsive portfolio website generator built with React, TypeScript, and Chakra UI. This application allows users to create a professional portfolio website by uploading their resume and customizing the content.

## Features

- Responsive design for all devices
- Multiple theme options (light/dark/terminal/solarized)
- Smooth scroll navigation
- Animated sections
- Modern UI with Chakra UI components
- SEO optimized
- Easy to customize and extend

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-generator.git
cd portfolio-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
portfolio-generator/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── theme.ts
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## Customization

1. Update the content in each component to match your information
2. Modify the theme colors in `src/theme.ts`
3. Add or remove sections as needed
4. Customize the styling using Chakra UI props or Tailwind CSS classes

## Technologies Used

- React
- TypeScript
- Chakra UI
- Framer Motion
- Tailwind CSS
- Vite
- React Router DOM

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Chakra UI for the component library
- Framer Motion for animations
- React Icons for the icon set
