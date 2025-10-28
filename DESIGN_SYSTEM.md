# Portfolio Design System

This portfolio uses a custom glassmorphism design system built with React, TypeScript, and Tailwind CSS.

## Color Palette

```css
--portfolio-bg: #1a1a1a       /* Main background */
--portfolio-card: #3C3C3C     /* Card backgrounds */
--portfolio-border: #383A3C   /* Card borders */
--portfolio-accent: #8E979F   /* Accent color for dates/labels */
```

## Components

### Card Component
The main building block for glassmorphism UI elements.

```tsx
import { Card } from './components/Card'

// Basic card
<Card>Content here</Card>

// Card with hover effect
<Card hover>Content here</Card>

// Card with different padding
<Card padding="sm">Content here</Card> // sm, md, lg, none
```

### ProjectCard Component
Specialized card for project thumbnails.

```tsx
import { ProjectCard } from './components/Card'

<ProjectCard 
  title="Project Name"
  onClick={() => console.log('clicked')}
/>
```

### Section Component
Consistent section layout with title and padding.

```tsx
import { Section } from './components/Section'

<Section title="Section Name">
  <div>Content here</div>
</Section>
```

### List Items
Specialized components for work and research items.

```tsx
import { WorkItem, ResearchItem } from './components/ListItem'

<WorkItem 
  year="2024-now"
  company="Company Name"
  role="Role Title"
/>

<ResearchItem 
  title="Research Title"
  description="link"
  location="@ RESL" // optional, defaults to "@ RESL"
/>
```

## CSS Classes

### Glassmorphism Utilities

```css
.glass-card         /* Basic glassmorphism card style */
.glass-card-hover   /* Card with hover effect */
.text-accent        /* Accent color text (#8E979F) */
.section-padding    /* Consistent horizontal padding (px-12) */
```

### Tailwind Custom Colors

```tsx
// Use in className
bg-portfolio-bg
bg-portfolio-card
border-portfolio-border
text-portfolio-accent
```

## Typography

- **Font Family**: Geist Mono (monospace)
- **Headings**: `text-xl font-normal` for section titles
- **Body**: `text-gray-300` for main content
- **Accent Text**: `.text-accent` or custom color `#8E979F`
- **Links**: `text-blue-400 hover:text-blue-300 underline`

## Layout Patterns

### Main Container
```tsx
<div className="min-h-screen bg-portfolio-bg text-white font-mono p-8 max-w-4xl mx-auto">
```

### Section Spacing
- Sections use `mb-16` for consistent vertical spacing
- Content uses `section-padding` (px-12) to align with header card

### Grid Layouts
```tsx
// Project cards
<div className="grid grid-cols-5 gap-4">
  {/* Cards here */}
</div>
```

## Best Practices

1. **Consistency**: Always use the provided components instead of custom styling
2. **Semantic Colors**: Use the custom color palette variables instead of hard-coded hex values
3. **Spacing**: Use the established spacing scale for consistent layouts
4. **Hover States**: Add appropriate hover effects for interactive elements
5. **Accessibility**: Maintain semantic HTML structure and proper contrast ratios

## Adding New Components

When creating new components:
1. Follow the existing component structure
2. Use the established color palette
3. Apply glassmorphism styles with `.glass-card` or `.glass-card-hover`
4. Document the component in this file
5. Export from appropriate component files

## Examples

### Creating a New Card Type
```tsx
export function CustomCard({ title, content }: CustomCardProps) {
  return (
    <Card hover padding="md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </Card>
  )
}
```

### Using Custom Colors
```tsx
// Preferred - using Tailwind custom colors
<div className="bg-portfolio-card border-portfolio-border">

// Avoid - hard-coded values
<div className="bg-[#3C3C3C] border-[#383A3C]">
```

This design system ensures consistency, maintainability, and a cohesive user experience across your portfolio.
