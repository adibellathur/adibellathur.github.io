# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A modern personal portfolio website for Adithya Bellathur built with React 19, Vite, TypeScript, and Tailwind CSS. Features a custom glassmorphism design system and showcases work experience, research papers, and personal projects.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture Overview

### Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom glassmorphism design system
- **Font**: Geist Mono (Google Fonts)
- **Build Tool**: Vite with React plugin

### Project Structure
```
src/
├── App.tsx              # Main application component
├── components/          # Reusable UI components
│   ├── Card.tsx         # Card and ProjectCard components
│   ├── Section.tsx      # Section wrapper component
│   └── ListItem.tsx     # WorkItem and ResearchItem components
├── lib/
│   └── utils.ts         # Utility functions (clsx + tailwind-merge)
├── assets/              # Static assets (images, etc.)
├── index.css            # Global styles and custom CSS components
└── main.tsx             # React entry point
```

### Design System
The project uses a custom glassmorphism design system documented in `DESIGN_SYSTEM.md`:

- **Color Palette**: Custom portfolio colors defined in `tailwind.config.js`
  - `portfolio-bg`: #1a1a1a (main background)
  - `portfolio-card`: #3C3C3C (card backgrounds) 
  - `portfolio-border`: #383A3C (card borders)
  - `portfolio-accent`: #8E979F (accent text)

- **Key Components**:
  - `Card`: Base glassmorphism component with hover variants and padding options
  - `ProjectCard`: Specialized card for project thumbnails
  - `Section`: Consistent section layout wrapper
  - `WorkItem`/`ResearchItem`: Specialized list item components

- **CSS Classes**: Custom utility classes for glassmorphism effects in `index.css`

### Key Configuration Files

- **`vite.config.ts`**: Vite configuration with React plugin and path aliases (`@` → `./src`)
- **`tailwind.config.js`**: Tailwind config with custom colors, Geist Mono font, custom font sizes
- **`eslint.config.js`**: ESLint config with TypeScript, React Hooks, and React Refresh plugins
- **`tsconfig.json`**: TypeScript project references setup (app + node configs)

## Development Workflow

### Making Changes
1. Follow the established glassmorphism design patterns
2. Use existing components from `src/components/` rather than creating custom styles
3. Maintain consistency with the custom color palette
4. Add new components to `DESIGN_SYSTEM.md` documentation

### Component Development
- All components use TypeScript interfaces for props
- Follow the established padding/spacing conventions
- Use the `cn()` utility function from `lib/utils.ts` for conditional classes
- Maintain semantic HTML structure for accessibility

### Styling Guidelines
- Use custom portfolio colors instead of hard-coded hex values
- Apply glassmorphism effects with `.glass-card` or `.glass-card-hover` classes
- Use `section-padding` class for consistent horizontal alignment
- Follow the established typography hierarchy with Geist Mono

## Deployment

The site is configured for GitHub Pages deployment. Build artifacts are generated in the `dist/` directory and can be deployed to any static hosting service.

## Data Management

Work experience, research papers, and projects are currently defined as static arrays in `App.tsx`. When adding new items:
- Follow the existing TypeScript interfaces (`WorkExperience`, `Project`)
- Maintain chronological ordering (newest first for work experience)
- Use consistent formatting for years and company names

## Legacy Files

The repository contains some legacy files from a previous version:
- `archives/`: Contains old HTML/CSS implementation
- `css/`, `img/`: Old static assets
- These can be ignored for current development work

## Browser Support

Modern browsers supporting:
- ES2020+ features
- CSS backdrop-filter (for glassmorphism effects)
- CSS Grid and Flexbox
