# Changelog

All notable changes to the Begory Capital project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added - UI Framework Setup
- **Shadcn UI Integration** (ac1612a)
  - Installed Shadcn UI component library with "new-york" style variant
  - Configured `components.json` with project structure and aliases
  - Added Button component with multiple variants (default, destructive, outline, secondary, ghost, link)
  - Added utility functions for className management
  
- **Theme System** (745b489, 6841363)
  - Integrated `next-themes` for dark mode support
  - Created custom theme provider component
  - Configured global CSS with Tailwind CSS v4
  - Set up CSS custom properties using `oklch` color space
  - Added theme variables for:
    - Colors (background, foreground, primary, secondary, accent, muted, destructive)
    - Border radius
    - Light and dark mode variants
  
- **Styling Infrastructure**
  - Integrated Tailwind CSS v4 with PostCSS
  - Added `tailwindcss-animate` for smooth animations
  - Added `tw-animate-css` for additional animation utilities
  - Configured custom color schemes and design tokens
  
- **Development Dependencies**
  - `shadcn` - Component CLI tool
  - `tailwindcss` - Utility-first CSS framework
  - `tw-animate-css` - Animation utilities
  - TypeScript types for React and Next.js
  
- **Production Dependencies**
  - `class-variance-authority` - For component variant management
  - `clsx` - Utility for constructing className strings
  - `tailwind-merge` - For merging Tailwind CSS classes
  - `lucide-react` - Icon library
  - `next-themes` - Theme management for Next.js
  - `radix-ui` - Accessible component primitives

### Fixed
- CSS import errors for Tailwind and Shadcn packages (6841363)
- Theme configuration and color variable definitions

## [0.1.0] - 2026-01-31

### Added
- Initial Next.js project setup with `create-next-app`
- Basic project structure with App Router
- Development environment configuration
