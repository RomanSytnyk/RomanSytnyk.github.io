# Roman's Digital Garden - Architecture Documentation

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Content Management](#content-management)
- [Development Setup](#development-setup)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)

---

## Project Overview

This is a **static personal website** built as a digital garden - a space to showcase professional identity, share knowledge through articles, and document personal interests and projects. The site is designed to be easily editable and deployable to platforms like GitHub Pages.

### Key Features

- **Single-page application** with smooth scrolling navigation
- **Content-driven** architecture using JSON files for easy editing
- **Responsive design** with mobile-first approach
- **Modern UI** built with essential shadcn/ui components
- **Type-safe** development with TypeScript
- **Code optimization** using Knip to remove unused dependencies and files

---

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    React Application                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Pages      │  │ Components   │  │     UI       │      │
│  │  (Index)     │  │  (Sections)  │  │  (shadcn)    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                  │                  │              │
│         └──────────────────┼──────────────────┘              │
│                            ▼                                 │
│                    ┌──────────────┐                          │
│                    │   Content    │                          │
│                    │   (JSON)     │                          │
│                    └──────────────┘                          │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **Static Content**: JSON files in [`content/`](content/) directory store all site content
2. **Component Import**: React components import JSON data directly
3. **Rendering**: Components render content with consistent styling
4. **Navigation**: React Router handles client-side routing (currently single-page)

### Design Patterns

- **Component Composition**: UI built from reusable, composable components
- **Separation of Concerns**: Content separated from presentation logic
- **Utility-First CSS**: Tailwind CSS for styling with custom utilities
- **Type Safety**: TypeScript interfaces for all data structures

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.3.1 | UI library |
| **TypeScript** | ^5.8.3 | Type safety |
| **Vite** | ^5.4.19 | Build tool & dev server |

### UI & Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | ^3.4.17 | Utility-first CSS framework |
| **shadcn/ui** | Latest | Pre-built UI components |
| **Radix UI** | Multiple | Accessible component primitives |
| **Lucide React** | ^0.462.0 | Icon library |
| **class-variance-authority** | ^0.7.1 | Component variant management |
| **clsx** | ^2.1.1 | Conditional className utility |
| **tailwind-merge** | ^2.6.0 | Tailwind class merging |

### Routing & State

| Technology | Version | Purpose |
|------------|---------|---------|
| **React Router** | ^6.30.1 | Client-side routing |
| **TanStack Query** | ^5.83.0 | Data fetching & caching |

### Content Management

| Technology | Version | Purpose |
|------------|---------|---------|
| **TinaCMS** | ^3.1.2 | Headless CMS for content editing |

### Development Tools

| Technology | Version | Purpose |
|------------|---------|---------|
| **ESLint** | ^9.32.0 | Code linting |
| **PostCSS** | ^8.5.6 | CSS processing |
| **Autoprefixer** | ^10.4.21 | CSS vendor prefixes |
| **Knip** | ^5.85.0 | Code optimization and unused file/dependency detection |

---

## Project Structure

```
roman-s-digital-garden/
├── public/                      # Static assets
│   ├── favicon.ico             # Site favicon
│   ├── placeholder.svg         # Fallback image
│   └── robots.txt              # SEO robots file
│
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── ui/                # Essential shadcn/ui components
│   │   │   ├── button.tsx     # Button component
│   │   │   ├── dialog.tsx     # Dialog component
│   │   │   ├── toaster.tsx    # Toast notifications
│   │   │   ├── toast.tsx      # Toast component
│   │   │   ├── tooltip.tsx    # Tooltip component
│   │   │   └── sonner.tsx     # Sonner toast notifications
│   │   ├── Articles.tsx       # Articles section
│   │   ├── BeyondWork.tsx     # Interests section
│   │   ├── Education.tsx      # Education section
│   │   ├── Footer.tsx         # Site footer
│   │   ├── MyStory.tsx        # Hero/About section
│   │   ├── OpenSource.tsx     # Projects section
│   │   ├── PhotoGallery.tsx   # Photo gallery component
│   │   └── TechStack.tsx      # Tech stack display
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── use-toast.ts       # Toast notifications
│   │
│   ├── lib/                    # Utility functions
│   │   └── utils.ts           # Helper utilities
│   │
│   ├── pages/                  # Page components
│   │   ├── Index.tsx          # Main landing page
│   │   └── NotFound.tsx       # 404 page
│   │
│   ├── App.tsx                # Root component with routing
│   ├── index.css              # Global styles & Tailwind
│   ├── main.tsx               # Application entry point
│   └── vite-env.d.ts          # Vite type definitions
│
├── content/                    # Content data (JSON)
│   ├── articles/              # Blog articles data
│   │   └── articles.json
│   ├── education/             # Education history
│   │   └── education.json
│   ├── images/                # Image assets
│   │   ├── boardGames/        # Board game images
│   │   ├── erasmuss/          # Erasmus program images
│   │   ├── meetings/          # Meeting photos
│   │   └── photography/       # Photography images
│   ├── interests/             # Personal interests
│   │   └── interests.json
│   ├── profile/               # Profile information
│   │   └── main.json
│   ├── projects/              # Open source projects
│   │   └── projects.json
│   ├── story/                 # Personal story/bio
│   │   └── main.json
│   └── technologies/          # Tech stack data
│       └── stack.json
│
├── .gitignore                 # Git ignore rules
├── ARCHITECTURE.md            # Architecture documentation
├── components.json            # shadcn/ui configuration
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # Project documentation
```

---

## Key Components

### Application Entry Points

#### [`main.tsx`](src/main.tsx:1)
- Entry point for the React application
- Mounts the App component to the DOM

#### [`App.tsx`](src/App.tsx:1)
- Root component with routing configuration
- Wraps app with providers:
  - `QueryClientProvider` - Data fetching
  - `TooltipProvider` - UI tooltips
  - `Toaster` & `Sonner` - Toast notifications
  - `BrowserRouter` - Client-side routing

### Page Components

#### [`Index.tsx`](src/pages/Index.tsx:1)
Main landing page that composes all sections:
```tsx
<MyStory />      // Hero section with profile
<BeyondWork />   // Personal interests
<TechStack />    // Technology stack
<Articles />     // Blog articles
<OpenSource />   // Open source projects
<Education />    // Education history
<Footer />       // Site footer
```

#### [`NotFound.tsx`](src/pages/NotFound.tsx:1)
404 error page for unmatched routes

### Section Components

#### [`MyStory.tsx`](src/components/MyStory.tsx:1)
**Purpose**: Hero section displaying profile information

**Features**:
- Profile image with fallback
- Name and tagline display
- Social media links (GitHub, LinkedIn, Instagram, Medium, Email)
- Role/position tags
- Introductory text

**Data Source**: [`content/profile/main.json`](content/profile/main.json:1), [`content/story/main.json`](content/story/main.json:1)

#### [`BeyondWork.tsx`](src/components/BeyondWork.tsx:1)
**Purpose**: Display personal interests and hobbies

**Features**:
- Collapsible cards for each interest
- Icon mapping from Lucide icons
- Optional images and detailed text
- Expandable content on click

**Data Source**: [`content/interests/interests.json`](content/interests/interests.json:1)

#### [`TechStack.tsx`](src/components/TechStack.tsx:1)
**Purpose**: Showcase technical skills and tools

**Features**:
- Technology badges with hover effects
- Tool display with emojis
- Responsive grid layout

**Data Source**: [`content/technologies/stack.json`](content/technologies/stack.json:1)

#### [`Articles.tsx`](src/components/Articles.tsx:1)
**Purpose**: Display recent blog articles

**Features**:
- Article cards with icons
- External link indicators
- Hover effects with glow
- Link to Medium profile

**Data Source**: [`content/articles/articles.json`](content/articles/articles.json:1)

#### [`OpenSource.tsx`](src/components/OpenSource.tsx:1)
**Purpose**: Showcase open source contributions

**Features**:
- Project cards with GitHub icons
- Author badge for own projects
- Contribution links
- External link indicators

**Data Source**: [`content/projects/projects.json`](content/projects/projects.json:1)

#### [`Education.tsx`](src/components/Education.tsx:1)
**Purpose**: Display educational background

**Data Source**: [`content/education/education.json`](content/education/education.json:1)


#### [`Footer.tsx`](src/components/Footer.tsx:1)
**Purpose**: Site footer with contact information

**Features**:
- Call-to-action for connection
- Social media buttons
- Location display
- Copyright notice

### UI Components

The [`src/components/ui/`](src/components/ui/) directory contains shadcn/ui components:
- **Form components**: Button, Input, Textarea, Select, Checkbox, etc.
- **Layout components**: Card, Separator, ScrollArea, etc.
- **Feedback components**: Alert, Toast, Dialog, etc.
- **Navigation components**: Tabs, Breadcrumb, Menubar, etc.
- **Data display**: Avatar, Badge, Table, etc.

All components are built on Radix UI primitives for accessibility.

---

## Content Management


### Content Files

All content is stored as JSON files for easy editing:

#### [`content/profile/main.json`](content/profile/main.json:1)
```json
{
  "name": "Your Name",
  "tagline": "Developer · Creator · Learner",
  "location": "City, Country",
  "linkedin": "https://linkedin.com/in/...",
  "github": "https://github.com/...",
  "medium": "https://medium.com/@...",
  "instagram": "https://instagram.com/...",
  "email": "email@example.com",
  "roles": ["Software Engineer", "Open Source Contributor"]
}
```

#### [`content/interests/interests.json`](content/interests/interests.json:1)
```json
[
  {
    "icon": "Coffee",
    "title": "Coffee Enthusiast",
    "description": "Exploring different brewing methods",
    "clickable": true,
    "text": "Detailed description...",
    "image": "/images/coffee.jpg"
  }
]
```

#### [`content/technologies/stack.json`](content/technologies/stack.json:1)
```json
{
  "technologies": ["React", "TypeScript", "Node.js", ...],
  "tools": [
    { "name": "VS Code", "emoji": "💻" },
    { "name": "Git", "emoji": "🔧" }
  ]
}
```

---

## Development Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **bun** (package manager)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd roman-s-digital-garden

# Install dependencies
npm install
# or
bun install
```

### Development Server

```bash
# Start development server
npm run dev
# or
bun run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build static files
npm run build
# or
bun run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview production build locally
npm run preview
# or
bun run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

### Code Optimization

```bash
# Run Knip to find unused files, dependencies, and exports
npm run knip

# Automatically fix unused dependencies
npx knip --fix --fix-type dependencies

# Automatically fix unused devDependencies
npx knip --fix --fix-type devDependencies
```

---

## Deployment

### GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Set source to `gh-pages` branch or use GitHub Actions

3. **Deploy using GitHub Actions** (recommended):
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

### Netlify

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** automatically on push

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Other Static Hosting

The `dist/` folder contains all static files and can be deployed to:
- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Any static file hosting service

---

## Customization Guide

### Updating Profile Information

Edit [`content/profile/main.json`](content/profile/main.json:1):
```json
{
  "name": "Your Name",
  "tagline": "Your · Professional · Tagline",
  "location": "Your City, Country",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername",
  "medium": "https://medium.com/@yourusername",
  "instagram": "https://instagram.com/yourusername",
  "email": "your.email@example.com",
  "roles": ["Role 1", "Role 2", "Role 3"]
}
```

### Adding Articles

Edit [`content/articles/articles.json`](content/articles/articles.json:1):
```json
[
  {
    "title": "Article Title",
    "description": "Brief description of the article",
    "url": "https://medium.com/@username/article-slug",
    "icon": "Palette"  // Lucide icon name
  }
]
```

### Adding Projects

Edit [`content/projects/projects.json`](content/projects/projects.json:1):
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Brief project description",
      "url": "https://github.com/username/repo",
      "isAuthor": true
    }
  ],
  "contributions": [
    {
      "name": "Project Name",
      "url": "https://github.com/username/repo"
    }
  ]
}
```

### Adding Interests

Edit [`content/interests/interests.json`](content/interests/interests.json:1):
```json
[
  {
    "icon": "Coffee",  // Lucide icon name
    "title": "Interest Title",
    "description": "Brief description",
    "clickable": true,
    "text": "Detailed description (optional)",
    "image": "/path/to/image.jpg (optional)"
  }
]
```

### Updating Tech Stack

Edit [`content/technologies/stack.json`](content/technologies/stack.json:1):
```json
{
  "technologies": ["React", "TypeScript", "Node.js", ...],
  "tools": [
    { "name": "Tool Name", "emoji": "🔧" }
  ]
}
```

### Customizing Colors

Edit [`src/index.css`](src/index.css:1) CSS variables:
```css
:root {
  --background: 210 40% 98%;
  --foreground: 215 25% 20%;
  --primary: 210 80% 50%;
  --secondary: 200 30% 92%;
  /* ... more variables */
}
```

### Adding New Sections

1. **Create component** in [`src/components/`](src/components/):
   ```tsx
   // src/components/NewSection.tsx
   const NewSection = () => {
     return (
       <section id="new-section" className="px-4 py-16">
         <div className="container mx-auto max-w-4xl">
           <h2 className="mb-8 text-center text-2xl font-semibold text-primary">
             Section Title
           </h2>
           {/* Content */}
         </div>
       </section>
     );
   };
   export default NewSection;
   ```

2. **Import and add** to [`src/pages/Index.tsx`](src/pages/Index.tsx:1):
   ```tsx
   import NewSection from "@/components/NewSection";

   const Index = () => {
     return (
       <div className="min-h-screen bg-background">
         <main>
           {/* Existing sections */}
           <NewSection />
         </main>
         <Footer />
       </div>
     );
   };
   ```


### Adding New Icons

The project uses Lucide React icons. To add new icons:

1. **Find icon** at [lucide.dev](https://lucide.dev/icons/)
2. **Import** in component:
   ```tsx
   import { IconName } from "lucide-react";
   ```
3. **Use** in JSX:
   ```tsx
   <IconName className="h-5 w-5" />
   ```

### Customizing Animations

Edit [`src/index.css`](src/index.css:104) animation utilities:
```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## Best Practices

### Content Management
- Keep JSON files properly formatted
- Use meaningful names for collections and fields
- Validate JSON structure after edits
- Commit content changes with descriptive messages

### Code Organization
- Keep components focused and single-purpose
- Use TypeScript interfaces for data structures
- Follow React best practices (hooks, props, etc.)
- Maintain consistent naming conventions

### Performance
- Images are lazy-loaded by default
- Use appropriate image formats (WebP, AVIF)
- Minimize bundle size by importing only needed components
- Leverage Vite's build optimizations

### Code Maintenance
- Regularly run `npm run knip` to identify and remove unused code
- Keep dependencies up-to-date and remove unused ones
- Use Knip before major releases to ensure clean codebase
- Document removed dependencies and files for team awareness

### Accessibility
- All UI components are built on Radix UI (accessible)
- Use semantic HTML elements
- Provide alt text for images
- Ensure keyboard navigation works

---

## Troubleshooting

### Build Errors

**Issue**: TypeScript errors during build
```bash
# Solution: Check TypeScript configuration
npm run lint
```

**Issue**: Missing dependencies
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Development Issues

**Issue**: Port 5173 already in use
```bash
# Solution: Use different port
npm run dev -- --port 3000
```

**Issue**: Hot reload not working
```bash
# Solution: Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Content Issues

**Issue**: JSON parsing errors
- Validate JSON using [jsonlint.com](https://jsonlint.com/)
- Check for trailing commas
- Ensure proper quote usage

**Issue**: Images not loading
- Verify image paths are correct
- Check file exists in `public/` directory
- Ensure proper file extensions

---

## Future Enhancements

Potential improvements for the project:

- [ ] Add dark mode toggle
- [ ] Implement blog post pages (not just links)
- [ ] Add search functionality
- [ ] Integrate analytics (Google Analytics, Plausible)
- [ ] Add RSS feed for articles
- [ ] Implement comments system
- [ ] Add multilingual support
- [ ] Create admin dashboard for content editing
- [ ] Add PWA capabilities
- [ ] Implement image optimization pipeline

---

## Resources

### Documentation
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TinaCMS Documentation](https://tina.io/docs)

### Design Resources
- [Lucide Icons](https://lucide.dev/icons)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Tailwind UI](https://tailwindui.com)

### Deployment Platforms
- [GitHub Pages](https://pages.github.com)
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

---

## License

This project is personal property. All rights reserved.

---

## Contact

For questions or feedback about this project, please reach out through the contact information provided on the website.

---

**Last Updated**: 2026-02-24
